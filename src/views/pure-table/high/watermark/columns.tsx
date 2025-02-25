import { tableDataEdit } from "../data";
import { ref, onMounted, type Ref } from "vue";
import { clone, useWatermark, delay } from "@pureadmin/utils";

export function useColumns(waterRef: Ref) {
  const dataList = ref(clone(tableDataEdit, true));

  const columns: TableColumnList = [
    {
      label: "ID",
      prop: "id"
    },
    {
      label: "日期",
      prop: "date"
    },
    {
      label: "姓名",
      prop: "name"
    },
    {
      label: "地址",
      prop: "address"
    }
  ];

  onMounted(() => {
    delay().then(() => {
      const { setWatermark } = useWatermark(
        waterRef.value.getTableRef().$refs.tableWrapper
      );
      setWatermark("编程即艺术", {
        font: "16px Microsoft YaHei",
        globalAlpha: 0.8,
        forever: true,
        width: 252,
        height: 80
      });
    });
  });

  return {
    columns,
    dataList
  };
}
