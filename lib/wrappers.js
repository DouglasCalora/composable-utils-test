function s({ store: u }) {
  const { userPermissions: n, isSuperuser: a } = u;
  function t(r, e) {
    try {
      return a ? !0 : Object.prototype.hasOwnProperty.call(n, r) ? e ? n[r] === "*" || n[r].includes(e) : !0 : !1;
    } catch {
      return !1;
    }
  }
  function o(r = [], e) {
    if (!Array.isArray(r))
      throw new Error("Please provide a valid array for permissions.");
    return r.some((c) => t(c, e));
  }
  return {
    can: t,
    canAny: o
  };
}
export {
  s as useCan
};
