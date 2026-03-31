export type DomAttribute = { name: string; value: string };

export type DomElement = {
  type: string;
  content?: string;
  classes?: string;
  attribute?: DomAttribute;
};

export default class CreateDOM {
  build(element: DomElement) {
    const el = document.createElement(element.type);

    if (element.content) el.textContent = element.content;
    if (element.classes) el.className = element.classes;
    if (element.attribute)
      el.setAttribute(element.attribute.name, element.attribute.value);

    return el;
  }
}
