/* \\Credit for this component goes to https://github.com/elron I just made a few changes to make it work with my project exactly how I wanted it to. Thanks Elron!*/

import { cubicOut } from "svelte/easing";

/**
 * `axis` (`x` | `y`, default `y`) — the axis of motion along which the transition occurs
 */
export function horizontalSlide(
  node: HTMLElement,
  { delay = 0, duration = 400, easing = cubicOut, axis = "x" } = {}
) {
  const style = getComputedStyle(node);
  const opacity = +style.opacity;
  const primary_property = axis === "y" ? "height" : "width";
  const primary_property_value = parseFloat(style[primary_property as keyof CSSStyleDeclaration] as string);
  const secondary_properties: ("top" | "bottom" | "left" | "right")[] =
    axis === "y" ? ["top", "bottom"] : ["left", "right"];
  const capitalized_secondary_properties = secondary_properties.map(
    (e) => `${e[0].toUpperCase()}${e.slice(1)}`
  );
  const padding_start_value = parseFloat(
    style[`padding${capitalized_secondary_properties[0]}` as keyof CSSStyleDeclaration] as string
  );
  const padding_end_value = parseFloat(
    style[`padding${capitalized_secondary_properties[1]}` as keyof CSSStyleDeclaration] as string
  );
  const margin_start_value = parseFloat(
    style[`margin${capitalized_secondary_properties[0]}` as keyof CSSStyleDeclaration] as string
  );
  const margin_end_value = parseFloat(
    style[`margin${capitalized_secondary_properties[1]}` as keyof CSSStyleDeclaration] as string
  );
  const border_width_start_value = parseFloat(
    style[`border${capitalized_secondary_properties[0]}Width` as keyof CSSStyleDeclaration] as string
  );
  const border_width_end_value = parseFloat(
    style[`border${capitalized_secondary_properties[1]}Width` as keyof CSSStyleDeclaration] as string
  );
  return {
    delay,
    duration,
    easing,
    css: (t: number) =>
      // 			'overflow: hidden;' +
      `opacity: ${Math.min(t * 20, 1) * opacity};` +
      `${primary_property}: ${t * primary_property_value}px;` +
      `padding-${secondary_properties[0]}: ${t * padding_start_value}px;` +
      `padding-${secondary_properties[1]}: ${t * padding_end_value}px;` +
      `margin-${secondary_properties[0]}: ${t * margin_start_value}px;` +
      `margin-${secondary_properties[1]}: ${t * margin_end_value}px;` +
      `border-${secondary_properties[0]}-width: ${
        t * border_width_start_value
      }px;` +
      `border-${secondary_properties[1]}-width: ${
        t * border_width_end_value
      }px;`,
  };
}
