export const assetManagementMenuList = [
  {
    id: "dashboard",
    title: "Dashboard",
    type: "item",
    url: "/asset-management/dashboard",
  },
  {
    id: "asset",
    title: "ข้อมูลครุภัณฑ์",
    type: "item",
    url: "/asset-management/asset",
  },
  {
    id: "assets",
    title: "ข้อมูลครุภัณฑ์เป็นชุด",
    type: "item",
    url: "/asset-management/assets",
  },
  {
    id: "requisition",
    title: "เบิกครุภัณฑ์",
    type: "collapse",
    children: [
      {
        id: "requisition-list",
        title: "รายการเบิกจ่ายครุภัณฑ์",
        type: "item",
        url: "/asset-management/requisition/list",
      },
      {
        id: "requisition-record",
        title: "บันทึกเบิกจ่ายครุภัณฑ์",
        type: "item",
        url: "/asset-management/requisition/record",
      },
      {
        id: "requisition-approval",
        title: "อนุมัติเบิกจ่ายครุภัณฑ์",
        type: "item",
        url: "/asset-management/requisition/approval",
      },
    ],
  },
  {
    id: "asset-borrow",
    title: "ยืม-คืน ครุภัณฑ์",
    type: "collapse",
    children: [
      {
        id: "asset-borrow-list",
        title: "รายการยืม-คืนครุภัณฑ์",
        type: "item",
        url: "/asset-management/borrow/list",
      },
      {
        id: "asset-borrow-record",
        title: "บันทึกยืมครุภัณฑ์",
        type: "item",
        url: "/asset-management/borrow/record",
      },
      {
        id: "asset-borrow-approval",
        title: "อนุมัติยืมครุภัณฑ์",
        type: "item",
        url: "/asset-management/borrow/approval",
      },
      {
        id: "asset-returned-record",
        title: "บันทึกคืนครุภัณฑ์",
        type: "item",
        url: "/asset-management/returned/record",
      },
    ],
  },
  {
    id: "asset-transfer-move",
    title: "โอนครุภัณฑ์/ย้ายสถานที่ตั้ง",
    type: "collapse",
    children: [
      {
        id: "transfer-move-list",
        title: "รายการโอนครุภัณฑ์/ย้าย",
        type: "item",
        url: "/asset-management/transfer/list",
      },
      {
        id: "transfer-move-record",
        title: "บันทึกโอนครุภัณฑ์/ย้าย",
        type: "item",
        url: "/asset-management/transfer/record",
      },
      {
        id: "transfer-move-approval",
        title: "อนุมัติโอนครุภัณฑ์/ย้าย",
        type: "item",
        url: "/asset-management/transfer/approval",
      },
    ],
  },
  {
    id: "asset-maintenance",
    title: "งานซ่อม",
    type: "collapse",
    children: [
      {
        id: "maintenance-dashboard",
        title: "Dashboard งานซ่อม",
        type: "item",
        url: "/asset-management/maintenance/dashboard",
      },
      {
        id: "requests-maintenance",
        title: "เพิ่มการซ่อมบำรุง",
        type: "item",
        url: "/asset-management/maintenance/requests",
      },
      {
        id: "maintenance-details-record",
        title: "ลงบันทึกรายละเอียดการซ่อม",
        type: "item",
        url: "/asset-management/maintenance/record",
      },
      {
        id: "outsource-maintenance",
        title: "บันทึกจ้างซ่อมภายนอก",
        type: "item",
        url: "/asset-management/maintenance/outsource",
      },
      {
        id: "outsource-maintenance-audit",
        title: "ตรวจสอบการจ้างภายนอก",
        type: "item",
        url: "/asset-management/maintenance/outsource/audit",
      },
    ],
  },
];
