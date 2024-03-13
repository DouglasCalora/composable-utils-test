import { ref as t } from "vue";
var s = /* @__PURE__ */ ((r) => (r.List = "list", r.Form = "form", r.Single = "single", r))(s || {});
function m(r) {
  const {
    mode: i = "form",
    defaults: e = {
      errors: {},
      metadata: {},
      values: {},
      fields: {}
    }
  } = r || {};
  if (!Object.values(s).includes(i))
    throw new Error("Invalid view mode");
  return {
    viewState: t({
      errors: { ...e == null ? void 0 : e.errors },
      fields: { ...e == null ? void 0 : e.fields },
      metadata: { ...e == null ? void 0 : e.metadata },
      fetching: !1,
      ...i === "list" && { results: [] },
      ...i === "single" && { result: {} },
      ...i === "form" && { values: { ...e == null ? void 0 : e.values }, submitting: !1 }
    })
  };
}
export {
  m as useView
};
