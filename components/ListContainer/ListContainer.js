import { Link } from "lucide-react";
import { useRouter } from "next/router";
import React from "react";
import styles from "../ListContainer/ListContainer.module.css";
import { SidePanelList } from "../SidePanelList";
const rawInquiry = [
  {
    href: "/rawInquiry/noReply",
    title: "No Reply",
  },
  {
    href: "/rawInquiry/notContacted",
    title: "Not Contacted",
  },
];
const requirementsGathering = [
  {
    href: "/requirementsGathering/incompleteRequirements",
    title: "Incomplete Requirements",
  },
  {
    href: "/requirementsGathering/reviewing",
    title: "Reviewing",
  },
  {
    href: "/requirementsGathering/formalitiesLeft",
    title: "Formalities",
  },
];
const teacherLocating = [
  {
    href: "/teacherLocating/searchingApplicants",
    title: "Searching Applicants",
  },
  {
    href: "/teacherLocating/applicantsFound",
    title: "Applications Found",
  },
  {
    href: "/teacherLocating/recommendationsShared",
    title: "Recommendations Shared",
  },
];
const demoProcessing = [
  {
    href: "/demoProcessing/demoReminders",
    title: "Demo Reminders/Calling",
  },
  {
    href: "/demoProcessing/clientFormalities",
    title: "Client Formalities",
  },
  {
    href: "/demoProcessing/teacherFormalities",
    title: "Teacher Formalities",
  },
  {
    href: "/demoProcessing/dayOneProcessing",
    title: "Day One Processing",
  },
  {
    href: "/demoProcessing/dayTwoProcessing",
    title: "Day Two Processing",
  },
  {
    href: "/demoProcessing/extendedDemo",
    title: "Extended Demo",
  },
  {
    href: "/demoProcessing/clientReviewing",
    title: "Client Reviewing",
  },
];
const feeProcessing = [
  {
    href: "/feeProcessing/teacherTransfer",
    title: "Teacher Transfer",
  },
  {
    href: "/feeProcessing/clientTransfer",
    title: "Client Transfer",
  },
  {
    href: "/feeProcessing/companyTransfer",
    title: "Company Transfer",
  },
  {
    href: "/feeProcessing/delayed",
    title: "Delayed",
  },
];
const rejected = [
  {
    href: "/rejected/lowBudget",
    title: "Low Budget",
  },
  {
    href: "/rejected/noResponse",
    title: "No Response",
  },
  {
    href: "/rejected/teacherNotFound",
    title: "Teacher Not Found",
  },
  {
    href: "/rejected/notInterested",
    title: "Not Interested",
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

function ListContainer() {
  const router = useRouter();
  return (
    <div className={styles.ListContainer}>
         <Link href={"/funded"}>
        <a className={router.asPath === "/funded" && "selected"}>Funded</a>
      </Link>
      {AllList.map((item) => (
        <SidePanelList rawInquiry={item[0]} sectionName={item[1]} />
      ))}
     
    </div>
  );
}

export default ListContainer;
