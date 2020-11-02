// import React from "react";
// import { Button, Descriptions, Popconfirm } from "antd";
// import Modal from "antd/lib/modal/Modal";

// function AdminProduct_ViewModal(props) {
//   let { openModal, dataView } = props;
//   console.log(openModal, dataView);
//   return (
//     <Modal
//       title="View comment"
//       visible={visible}
//       onOk={handleOk}
//       onCancel={handleCancel}
//       footer={null}
//     >
//       <Descriptions layout="horizontal">
//         <Descriptions.Item label="Job Name" span={3}>
//         </Descriptions.Item>
//         <Descriptions.Item label="Job Seeker Name" span={3}>
//         </Descriptions.Item>
//         <Descriptions.Item label="Content" span={3}>
//         </Descriptions.Item>
//         <Descriptions.Item label="Created Date" span={3}>
//         </Descriptions.Item>
//         <Descriptions.Item label="Approval" span={3}>
//           <Popconfirm
//             disabled={dataInfo.isApproval === true ? true : false}
//             placement="bottom"
//             title="Are you sure approval this comment?"
//             onConfirm={() => this.onApproval(dataInfo.id, dataInfo.rowVersion)}
//             okText="Yes"
//             cancelText="No"
//           >
//             <Button
//               type="primary"
//               disabled={dataInfo.isApproval === true ? true : false}
//             >
//               Approval{" "}
//             </Button>
//           </Popconfirm>
//         </Descriptions.Item>
//       </Descriptions>
//     </Modal>
//   );
// }

// export default AdminProduct_ViewModal;
