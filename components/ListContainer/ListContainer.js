import { Link, LogOut } from "lucide-react";
import { useRouter } from "next/router";
import React from "react";
import { Settings } from "tabler-icons-react";
import styles from "../ListContainer/ListContainer.module.css";
import SideBarMenu from "../SideBarMenu/SideBarMenu";
import { SidePanelList } from "../SidePanelList";
const rawInquiry = [
  {
    href: "/rawInquiry/noReply",
    title: "No Reply",
    key: "noReply",
  },
  {
    href: "/rawInquiry/notContacted",
    title: "Not Contacted",
    key: "notContacted",
  },
];
const requirementsGathering = [
  {
    href: "/requirementsGathering/incompleteRequirements",
    title: "Incomplete Requirements",
    key: "incompleteRequirements",
  },
  {
    href: "/requirementsGathering/reviewing",
    title: "Reviewing",
    key: "reviewing",
  },
  {
    href: "/requirementsGathering/formalitiesLeft",
    title: "Formalities",
    key: "formalitiesLeft",
  },
];
const teacherLocating = [
  {
    href: "/teacherLocating/searchingApplicants",
    title: "Searching Applicants",
    key: "searchingApplicants",
  },

  {
    href: "/teacherLocating/applicantsFound",
    title: "Applications Found",
    key: "applicantsFound",
  },
  {
    href: "/teacherLocating/recommendationsShared",
    title: "Recommendations Shared",
    key: "recommendationsShared",
  },
];
const demoProcessing = [
  {
    href: "/demoProcessing/demoReminders",
    title: "Demo Reminders/Calling",
    key: "demoReminders",
  },
  {
    href: "/demoProcessing/clientFormalities",
    title: "Client Formalities",
    key: "clientFormalities",
  },
  {
    href: "/demoProcessing/teacherFormalities",
    title: "Teacher Formalities",
    key: "teacherFormalities",
  },
  {
    href: "/demoProcessing/dayOneProcessing",
    title: "Day One Processing",
    key: "dayOneProcessing",
  },
  {
    href: "/demoProcessing/dayTwoProcessing",
    title: "Day Two Processing",
    key: "dayTwoProcessing",
  },
  {
    href: "/demoProcessing/extendedDemo",
    title: "Extended Demo",
    key: "extendedDemo",
  },
  {
    href: "/demoProcessing/clientReviewing",
    title: "Client Reviewing",
    key: "clientReviewing",
  },
];
const feeProcessing = [
  {
    href: "/feeProcessing/teacherTransfer",
    title: "Teacher Transfer",
    key: "teacherTransfer",
  },
  {
    href: "/feeProcessing/clientTransfer",
    title: "Client Transfer",
    key: "clientTransfer",
  },
  {
    href: "/feeProcessing/companyTransfer",
    title: "Company Transfer",
    key: "companyTransfer",
  },
  {
    href: "/feeProcessing/delayed",
    title: "Delayed",
    key: "delayed",
  },
];
const rejected = [
  {
    href: "/rejected/lowBudget",
    title: "Low Budget",
    key: "lowBudget",
  },
  {
    href: "/rejected/noResponse",
    title: "No Response",
    key: "noResponse",
  },
  {
    href: "/rejected/teacherNotFound",
    title: "Teacher Not Found",
    key: "teacherNotFound",
  },
  {
    href: "/rejected/notInterested",
    title: "Not Interested",
    key: "notInterested",
  },
];
const AllList = [
  [rawInquiry, "Raw Inquiry"],
  [requirementsGathering, "Requirements Gathering"],
  [teacherLocating, "Demo Processing"],
  [demoProcessing, "Demo Processing"],
  [feeProcessing, "Fee Processing"],
  [rejected, "Rejected"],
];
export const HeaderMapping = {
  rawInquiry: "Raw Inquiry",
  requirementsGathering: "Requirements Gathering",
  teacherLocating: "Demo Processing",
  demoProcessing: "Demo Processing",
  feeProcessing: "Fee Processing",
  rejected: "Rejected",
  addInquiry: "New Inquiry",
};
export const MappingList = {
  rawInquiry: rawInquiry,
  requirementsGathering: requirementsGathering,
  teacherLocating: teacherLocating,
  demoProcessing: demoProcessing,
  feeProcessing: feeProcessing,
  rejected: rejected,
};

function ListContainer() {
  const router = useRouter();
  return (
    <div className={styles.ListContainer}>
      {/*   <Link href={"/funded"}>
        <a className={router.asPath === "/funded" && "selected"}>Funded</a>
      </Link> */}
      <div className={styles.Container}>
        {AllList.map((item, index) => (
          <SidePanelList
            rawInquiry={item[0]}
            sectionName={item[1]}
            index={index + 1}
          />
        ))}
      </div>
    </div>
  );
}

export default ListContainer;
