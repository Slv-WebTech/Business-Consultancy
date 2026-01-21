import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function AlertDialog() {
  const [open, setOpen] = React.useState(false);

  const handleTermsOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <button type="button" className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm" onClick={handleTermsOpen}>
        Terms & Conditions
      </button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
        <DialogTitle id="alert-dialog-title">Terms & Conditions</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            This document is published in accordance with the provisions of Rule 3 (1) of the Information Technology (Intermediaries Guidelines) Rules, 2011
            that require publishing the rules and regulations, Privacy Policy and Terms of Use for access or usage of the www.quizaro.in QUIZARO EXTENDEDEDGE
            PRIVATE LIMITED provides this website to you under the following terms and conditions (this "Agreement" or "Terms of Use"). Our Privacy Policy (as
            in posted to our website), which explains how we collect and use information from visitors to our website is incorporated by reference in these
            Terms of Use. By using our website (the "Site") or submitting any information to us, you consent to and agree to be bound by these Terms of Use and
            our Privacy Policy. By using the Site in any manner, including but not limited to visiting or browsing the Site, you agree to be bound by this
            Agreement, the Privacy Policy, and all other operating rules, policies and procedures that may be published by us from time to time on the Site,
            each of which is incorporated by reference and each of which may be updated by us from time to time without notice to you. Your use of the Site is
            governed by the version of this Agreement in effect on the date of use Account Registration If you are under the age of 18, please do not sign up
            for an account. If you are accessing or using our site on behalf of any entity, you represent that you are authorized to accept these Terms of Use
            on that entity's behalf, that entity agrees to be responsible to QUIZARO if you violate these Terms of Use. You may access some areas of our site(s)
            without registering. However, in order to access certain features of the Site or to post content on the Site you must register to create an account
            ("Account"). You must complete the registration process by providing us with current, complete and accurate information. If you choose to register
            you will need to provide a username and password as well as other information that is part of our registration process. You will not share your
            password, let anyone else access your Account, or do anything else that might jeopardize the security of your Account. We have the right to cancel
            any account at any time if we believe you are not in compliance with any or all of the terms. Courses & Offered Payment Information about courses
            offered and prices would be provided in the Website. You agree to pay the price for the courses registered as per the pricing schedule indicated in
            the Site. At the time of a payment, you need to provide accurate information regarding your account, including a valid credit card or debit card or
            net banking credentials, and you must certify that you are over 18 years of age and legally able to enter into a valid and binding agreement with
            QUIZARO Processing & Account Payment QUIZARO may use third party electronic payment processors and/or financial institutions ("EPPs") to process
            financial transactions. You irrevocably authorize us, as necessary, to instruct such EPPs to handle such transactions and you irrevocably agree that
            QUIZARO may give such instructions on your behalf in accordance with your requests as submitted on the Site. While availing any of the EPPs
            available on the Site, We will not be responsible or assume any liability, whatsoever in respect of any loss or damage arising directly or
            indirectly to you due to: Lack of authorization for any transactions. Any payment issues arising out of the transaction or Decline of such
            transaction for any reason. You understand, accept and agree that the payment facility provided us, is neither a banking nor financial service.
            Modification of Pricing And Billing Terms- We reserve the right at any time to institute new prices, and to change the amount of or the basis for
            determining any prices or charges with respect to any courses offered. You agree to pay all charges, including applicable taxes, in accordance with
            the billing terms in effect at the time the price or charge becomes payable. INTELLECTUAL PROPERTY Quizaro expressly reserves all intellectual
            property rights in all text, programs, products, processes, technology, content, software and other materials, which appear on this Website. The
            compilation (meaning the collection, arrangement and assembly) of the content on the Website is the exclusive property of Quizaro. Reproduction in
            whole or in part of the same is strictly prohibited without the express written permission of Quizaro. The trademarks, logo and slogans displayed on
            the Site including the mark Quizaro, (collectively the "Trademarks'') are owned by Quizaro. Nothing on this Site should be construed as granting any
            license or right to use the Trademarks without written permission of Quizaro or such third party owner of the Trademarks. Your misuse of the
            Trademarks, or any other content on the Site, except as provided in these Terms of Use, is strictly prohibited. You are advised that QUIZARO will
            aggressively enforce its intellectual property rights to the fullest extent of the law. Quizaro grants to the registered users a non-exclusive,
            non-transferable, revocable right to use the contents on the Site for non-profit, educational and research use only, without the right of
            sublicense. Quizaro respects the intellectual property of others, and we ask our Users and content partners to do the same. The unauthorized
            posting, reproduction, copying, distribution, modification, public display or public performance of copyrighted works constitutes infringement of
            the copyright owner’s rights. As a condition of your use of the Site, you agree not to use any feature of the Site to infringe the intellectual
            property rights of others in any way. We will terminate the accounts of any User, and block access to Site of any User who are repeat infringers of
            the copyrights, or other intellectual property rights, of QUIZARO or others. We reserve the right to take these actions at any time, in our sole
            discretion, with or without notice, and without any liability to the User who is terminated or to the User whose access is blocked. Intellectual
            Property Right” for the purpose of the Terms of Use, shall mean all copyrights (including without limitation the exclusive right to reproduce,
            distribute copies of, display and perform the copyrighted work and to prepare derivative works), copyright registrations and applications, trademark
            rights (including, without limitation, registrations and applications), patent rights (whether registered or unregistered), trade names or business
            names, registered and unregistered design rights, mask-work rights, trade secrets, moral rights, author’s rights, rights in packaging, goodwill and
            other intellectual property rights, and all renewals and extension thereof and all rights or forms of protection of a similar nature or having an
            equivalent or similar effect to any of the above, which may subsist anywhere in the world, regardless of whether any of such rights arise under the
            laws of India or any other state, country or jurisdiction
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
