import React, { useState } from 'react';
import './TermsOfService.css'; // Import the CSS file
import axios from 'axios';

const TermsOfService = () => {
  return (
    <div className="bg-black text-white text-left">
      <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-2">TERMS OF USE for Alexa Skills</h2>

        <p>
          This agreement is between you and ZAVX (in this agreement, "Company" ,"the Company", "Us" or "We") and governs your use of the Skills built by Company on Amazon's Alexa service ("Alexa") on any Alexa-enabled device (the "Skills"). This agreement applies in addition to any other policy contract or agreement that you may have with Us or which applies to you. It does not replace any other benefit contract or agreement you may have with Us or which applies to you.
        </p>

        <p>
          Before using Skills built by Company, please review these Terms of Use, as well as our Privacy Policy for Alexa Skills built by Company, available <a href="#">here</a>. If you do not agree to these Terms of Use in their entirety, do not use the Skills built by Us.
        </p>

        <h3 className="text-xl font-bold mb-2">Privacy and Confidentiality:</h3>

        <p>
          The Skills allow you to use your Alexa-enabled device to communicate with Us, by voice, to perform different actions provided in skill descriptions of the Skills. To use the Skills, you will need to speak commands and questions aloud to your Alexa-enabled device, and you will receive responses from Us using your Alexa-enabled device. To use the Skills, you might be required to speak aloud your name and your personal information for a better experience. Alexa does not use voice-recognition technology. Once you provide this information, you are authorizing Us to provide information to Alexa, and We will assume that any communication via Alexa regarding your account is authorized by you.
        </p>

        <p>
          It is possible that someone other than you may interact with Skills built by Us. Someone other than you may overhear the information that you provide to Alexa, and learn information about your accounts if they overhear Alexa communicating with you. It is possible that if your personal information is known to others that they may also access your account information on Alexa Skills. It is also possible that Alexa (and the equipment) and/or Amazon will record your interactions with the Skills or with Alexa. Please review your agreements with Amazon to learn how Amazon uses the information that you provide to Alexa.
        </p>

        <h3 className="text-xl font-bold mb-2">Third-party Security:</h3>

        <p>
          Depending on your device's security settings, it may be possible for you to allow other users access to the Skills. By allowing other users to use the Skills, you assume all liability and responsibility for how the Skills and any information obtained from the Skills is accessed and used. We will not be liable for any unintended use of the Skills by users you have authorized to have access to Alexa and to the Skills.
        </p>

        <h3 className="text-xl font-bold mb-2">Accuracy:</h3>

        <p>
          Alexa and your Alexa-enabled device were not designed or manufactured by Us. Alexa uses software that was not designed by Us and over which we have no control. It is possible that Alexa may not hear you properly, may misinterpret what you say, or may say something to you that is different than the information that We provided to Alexa in response to your question. By accepting this Agreement, you understand and agree that we are not responsible for any inaccuracies or discrepancies in the information that you receive from Alexa or by using the Skill.
        </p>

        <h3 className="text-xl font-bold mb-2">Pilot:</h3>

        <p>
          The Skills built by Us might be part of a pilot and it is possible that the Skills may not work correctly, or work at all. We are not responsible for any technical errors or failure of Alexa or an Alexa-enabled device to work as expected. Alexa Skills are only available in English at this time.
        </p>

        <h3 className="text-xl font-bold mb-2">Requirements:</h3>

        <p>
          To use the Skills, you must have an Alexa-enabled device, an internet connection, and an Amazon account. If any of these requirements do not apply to you, do not use the Skills.
        </p>

        <h3 className="text-xl font-bold mb-2">Release of Information:</h3>

        <p>
          By installing and using the Skills built by Us, you agree that Amazon may use your information to complete your request through Alexa, and you authorize Us to share with Amazon the information we require to complete your request. When you use the Skills built by Us, the information that you communicate to Alexa is shared with Amazon and is then sent to Us. We then send the information which you have requested to Amazon, which is then communicated back to you with you through Alexa. Both Amazon and the Company use the internet to communicate with one another. If you do not agree that Amazon may receive and use your information, do not use the Skills built by Us. Company's use of your information is governed by Company's Privacy Policy for Alexa Skills.
        </p>

        <h3 className="text-xl font-bold mb-2">Changes and Amendments:</h3>

        <p>
          We may change or discontinue the Skills or any part of it, at any time, with no notice to you and at our sole discretion. If we update these Terms and Conditions, the updated Terms and Conditions will be available in the description of the Skills in your Alexa App and your continued use of the Skills will be understood by Us as your acceptance of the change.
        </p>

        <h3 className="text-xl font-bold mb-2">Termination:</h3>

        <p>
          We may terminate your access to the Skills at any time and without notice if you fail to comply with any of these terms. We may also terminate your access to the Skills if the Skills are no longer available.
        </p>

        <p>
          <span className="font-bold">DISCLAIMER:</span> YOU ASSUME ALL RISK FOR YOUR USE OF THE SKILLS. ALL INFORMATION IS PROVIDED “AS IS”, WITHOUT ANY REPRESENTATION AS TO FITNESS FOR ANY PARTICULAR PURPOSE AND WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED. THE INFORMATION PROVIDED BY THE SKILLS ARE FOR INFORMATION PURPOSES ONLY, AND DOES NOT CONSTITUTE ADVICE OF ANY KIND.
        </p>

        <h3 className="text-xl font-bold mb-2">Copyright and Intellectual Property:</h3>

        <p>
          Unless otherwise specified, all information and descriptions provided via the Skills are the copyrighted property of the Company and are protected by intellectual property laws. You may only use the information and descriptions contained in the Skills, without alteration, for personal, non-commercial purposes. All other uses are prohibited.
        </p>

        <h3 className="text-xl font-bold mb-2">Jurisdiction:</h3>

        <p>
          The information provided by Us through the Skills is not an offer to sell a product or service or to solicit you to buy a product or service. Your use of the Skills will be governed by the laws of Germany.
        </p>

    
      </div>
    </div>
  );
};

export default TermsOfService;
