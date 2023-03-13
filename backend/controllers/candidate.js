const asyncHandler = require("express-async-handler");
//Loading Schemas
const Candidate = require("../models/Candidate");
const Speciality = require("../models/Speciality");

module.exports = {
    //To get a display of all the candidates from the database
    allCandidates: asyncHandler(async (req, res) => {
        const candidates = await Candidate.find();

        if(!candidates) res.status(200).json({msg: "No data found"})

        res.status(200).json({ data: candidates });
    }), 

    //To display a single candidate
    specificCandidate: asyncHandler(async (req, res) => {
        const candidate = await Candidate.findById(req.params.id);
        res.status(200).json({ data: candidate });
    }),

    //To add a candidate to the DB
    addCandidate: asyncHandler(async (req, res) => {
        const {
          name,
          dob,
          NIN_Number,
          currentAddress,
          phoneNumber,
          emailAddress,
          candidateAccountFormLink,
          umbrella,
          consultant,
          candidatePayRate,
          specialty
        } = req.body;

        // Validate the request body
        if (!name || !dob || !NIN_Number || !currentAddress || !phoneNumber || !emailAddress || !umbrella || !specialty) {
          res.status(400).json({ message: "Please enter all required fields" });
          return;
        }

        const newCandidate = new Candidate({
          name,
          dob,
          NIN_Number,
          currentAddress,
          phoneNumber,
          emailAddress,
          candidateAccountFormLink: candidateAccountFormLink || '',
          umbrella,
          consultant: consultant || '',
          candidatePayRate: candidatePayRate || [],
          specialty
        });

        const savedCandidate = await newCandidate.save();
        res.status(201).json({ data: savedCandidate });
    }),

    //To update a candidate in the DB
    updateCandidate: asyncHandler(async (req, res) => {
        const {
          name,
          dob,
          NIN_Number,
          currentAddress,
          phoneNumber,
          emailAddress,
          candidateAccountFormLink,
          umbrella,
          consultant,
          candidatePayRate,
          specialty
        } = req.body;

        const candidate = await Candidate.findById(req.params.id);

        if (candidate) {
          // Update the candidate fields if present in the request body
          candidate.name = name || candidate.name;
          candidate.dob = dob || candidate.dob;
          candidate.NIN_Number = NIN_Number || candidate.NIN_Number;
          candidate.currentAddress = currentAddress || candidate.currentAddress;
          candidate.phoneNumber = phoneNumber || candidate.phoneNumber;
          candidate.emailAddress = emailAddress || candidate.emailAddress;
          candidate.candidateAccountFormLink = candidateAccountFormLink || candidate.candidateAccountFormLink;
          candidate.umbrella = umbrella || candidate.umbrella;
          candidate.consultant = consultant || candidate.consultant;
          candidate.candidatePayRate = candidatePayRate || candidate.candidatePayRate;
          candidate.specialty = specialty || candidate.specialty;

          const updatedCandidate = await candidate.save();
          res.status(200).json({ msg: "Candidates Found!",candidate: updatedCandidate });
        } else {
            res.status(404).json({ message: "Candidate not found" });
        }
    }),

    //To delete a candidate from the DB
    removeCandidate: asyncHandler(async (req, res) => {
        const candidate = await Candidate.findById(req.params.id);
        if (!candidate) {
          res.status(404).json({ message: "Candidate not found" });
          return;
        }
        await candidate.remove();
        res.status(200).json({ message: "Candidate removed" , candidate: candidate});
    }),

};