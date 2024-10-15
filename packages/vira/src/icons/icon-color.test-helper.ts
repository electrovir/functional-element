export enum ColorType {
    Color = 'color',
    Fill = 'fill',
    Stroke = 'stroke',
}

export function extractIconColor(element: Element, colorType: ColorType) {
    return window.getComputedStyle(element).getPropertyValue(colorType);
}
