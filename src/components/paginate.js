import _ from "lodash";

export function paginate(items, pageSize) {
  const startIndex = 0;
  return _(items).slice(startIndex).take(pageSize).value();
}
