import { ref as t } from "vue";
const r = {
  List: "list",
  Form: "form",
  Single: "single"
};
function m(o = {}) {
  const {
    mode: i = r.Form,
    defaults: e = {
      errors: {},
      metadata: {},
      values: {}
    }
  } = o;
  if (!Object.values(r).includes(i))
    throw new Error("Invalid view mode");
  return {
    viewState: t({
      errors: { ...e == null ? void 0 : e.errors },
      fields: { ...e == null ? void 0 : e.fields },
      metadata: { ...e == null ? void 0 : e.metadata },
      fetching: !1,
      ...i === r.List && { results: [] },
      ...i === r.Single && { result: {} },
      ...i === r.Form && { values: { ...e == null ? void 0 : e.values }, submitting: !1 }
    })
  };
}
export {
  m as useView
};
