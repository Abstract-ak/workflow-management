export interface Workflow {
  id: string;
  name: string;
  lastEditedBy: string;
  lastEditedTime: string;
  description: string;
  isPinned: boolean;
}

export const initialWorkflowData: Workflow[] = [
  {
    id: "#494",
    name: "Employee Onboarding Process",
    lastEditedBy: "Zubin Khanna",
    lastEditedTime: "22:43 IST - 28/05",
    description: "Streamlines new employee documentation and setup",
    isPinned: false,
  },
  {
    id: "#495",
    name: "Invoice Approval Workflow",
    lastEditedBy: "Sarah Miller",
    lastEditedTime: "15:30 IST - 28/05",
    description: "Manages invoice review and approval process",
    isPinned: false,
  },
  {
    id: "#496",
    name: "Customer Support Ticket Flow",
    lastEditedBy: "Alex Chen",
    lastEditedTime: "14:20 IST - 28/05",
    description: "Handles customer support ticket routing and resolution",
    isPinned: false,
  },
  {
    id: "#497",
    name: "Project Review Cycle",
    lastEditedBy: "Priya Sharma",
    lastEditedTime: "11:15 IST - 28/05",
    description: "Manages project milestone reviews and approvals",
    isPinned: false,
  },
  {
    id: "#498",
    name: "Leave Request Process",
    lastEditedBy: "Tom Wilson",
    lastEditedTime: "09:45 IST - 28/05",
    description: "Handles employee leave requests and approvals",
    isPinned: false,
  },
  {
    id: "#499",
    name: "Document Version Control",
    lastEditedBy: "Emma Davis",
    lastEditedTime: "08:30 IST - 28/05",
    description: "Manages document revisions and approvals",
    isPinned: false,
  },
  {
    id: "#500",
    name: "Budget Approval Flow",
    lastEditedBy: "Michael Chang",
    lastEditedTime: "16:20 IST - 27/05",
    description: "Handles budget request reviews and approvals",
    isPinned: false,
  },
  {
    id: "#501",
    name: "IT Access Request",
    lastEditedBy: "Lisa Johnson",
    lastEditedTime: "14:10 IST - 27/05",
    description: "Manages system access requests and permissions",
    isPinned: false,
  },
];
