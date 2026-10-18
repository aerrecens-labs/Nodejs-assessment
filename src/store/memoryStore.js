export function createMemoryStore(initial = []) {
  let records = initial.map((item) => ({ ...item }));

  return {
    all() {
      return records.map((item) => ({ ...item }));
    },
    find(id) {
      const found = records.find((item) => item.id === id);
      return found ? { ...found } : null;
    },
    insert(record) {
      records = [...records, { ...record }];
      return { ...record };
    },
    replace(next) {
      records = next.map((item) => ({ ...item }));
    },
    size() {
      return records.length;
    },
  };
}
