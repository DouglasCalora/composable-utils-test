import { ref as i } from "vue";
var t = /* @__PURE__ */ ((r) => (r.List = "list", r.Form = "form", r.Single = "single", r))(t || {});
function n(r) {
  const s = (r == null ? void 0 : r.mode) ?? "form", e = {
    errors: {},
    metadata: {},
    values: {},
    fields: {}
  };
  if (!Object.values(t).includes(s))
    throw new Error("Invalid view mode");
  return {
    viewState: i({
      errors: { ...e == null ? void 0 : e.errors },
      fields: { ...e == null ? void 0 : e.fields },
      metadata: { ...e == null ? void 0 : e.metadata },
      fetching: !1,
      ...s === "list" && { results: [] },
      ...s === "single" && { result: {} },
      ...s === "form" && { values: { ...e == null ? void 0 : e.values }, submitting: !1 }
    })
  };
}
export {
  n as useView
};
//# sourceMappingURL=index.js.map
