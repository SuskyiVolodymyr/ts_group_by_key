type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const result: GroupsMap<T> = {};

  items.forEach((item) => {
    const value: string = `${item[key]}`;

    if (value in result) {
      result[value].push(item);
    } else {
      result[value] = [item];
    }
  });

  return result;
}
