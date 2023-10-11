import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function AlertDialog() {
  const [open, setOpen] = React.useState(false);

  const handlePrivacyOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <a className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm" onClick={handlePrivacyOpen}>
        Privacy Policy
      </a>
      <Dialog open={open} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
        <DialogTitle id="alert-dialog-title">Privacy Policy</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Quizaro is owned and operated by Quizaro ExtentedEdge Pvt. Ltd. which expression shall mean and include its affiliates, successors and assigns).
            This Policy constitutes a legal agreement between You, as the user of the Website, and Quizaro, as the owner of the Website. This Policy does not
            apply to third-party websites that are connected via links to the Website. We encourage you to take the time to read this Privacy Policy as well as
            those of any other sites you visit, whether through a link on that site or otherwise. By Using The Company Website, Or By Otherwise Giving Us Your
            Information, You Will Be Deemed To Have Read, Understood And Agreed To The Practices And Policies Outlined In This Privacy Policy And Agree To Be
            Bound By The Privacy Policy. You Hereby Consent To Our Collection, Use And Sharing, Disclosure Of Your Information As Described In This Privacy
            Policy. We Reserve The Right To Change, Modify, Add Or Delete Portions Of The Terms Of This Privacy Policy, At Our Sole Discretion, At Any Time.
            AAPPLICABILITY This privacy policy (“Policy”) describes Our policies and procedures on the collection, use, storage and disclosure of any
            information including, business or personal information provided by You while using Our Website. COLLECTION OF INFORMATION Personally Identifiable
            Information Quizaro will use the information provided by You only in accordance with the purposes described in the Policy. During Your use of Our
            Website, We may collect and process such information from You, including but not limited to the below mentioned: Information that You provide to Us
            by filling in forms on the Website. This includes contact information such as name, email address, mailing address, phone number, any financial
            information, if any, unique identifiers such as user name, account number and password. Information that You provide when You write directly to Us
            (including by e-mail). Information that You provide to Us over telephone. We may make and keep a record of the information You share with
            us;Information that You provide to Us by completing surveys.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
