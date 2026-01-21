import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function AlertDialog() {
  const [open, setOpen] = React.useState(false);

  const handleAboutOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <button type="button" className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm" onClick={handleAboutOpen}>
        About Us
      </button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
        <DialogTitle id="alert-dialog-title">About Us</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Quizaro offers streamlined learning solution focused on delivering the best-in-class content, faculty, and pedagogy to aspirants, while balancing
            affordability and industry-relevant learning outcomes for individual learners. education offerings by adding specialized professional certifications
            to help learners up-skill with industry-relevant curricula, get noticed, and become future-proof in the dynamic business world. The joy of learning
            is as indispensable in study as breathing is to running. Quizaro for a better future for our learners, where we offer tailored learning programs.
            Standard educational content created by industry experts is distributed online through our platform across the globe at an affordable rate. We aim
            to deliver our mantra “keep learning keep growing” to every household that is brewing an aspiring careerist. Education is the most powerful weapon
            for changing the world.
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
