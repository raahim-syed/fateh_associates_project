const asyncHandler = require("express-async-handler");

//Loading Schemas
const Candidate = require("../models/Candidate");
const Speciality = require("../models/Speciality");

module.exports = {
    //To get a display of all the candidates from the database
    allCandidates: asyncHandler(async (req, res) => {
        const candidates = await Candidate.find();
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
            currAddress,
            phoneNumber,
            emailAddress,
            candidateAccountFormLink,
            Umbrella,
            consultant,
            candidatePayRate,
            speciality
        } = req.body;

        
        for(const key in req.body){
            if(!req.body[key]) throw new Error("Please Enter All Feilds");
        }

        const newCandidate = new Candidate({
            name,
            dob,
            NIN_Number,
            currAddress,
            phoneNumber,
            emailAddress,
            candidateAccountFormLink,
            Umbrella,
            consultant,
            candidatePayRate,
            speciality
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
            currAddress,
            phoneNumber,
            emailAddress,
            candidateAccountFormLink,
            Umbrella,
            consultant,
            candidatePayRate,
            speciality
        } = req.body;

        const candidate = await Candidate.findById(req.params.id);

        if (candidate) {
            candidate.name = name || candidate.name;
            candidate.dob = dob || candidate.dob;
            candidate.NIN_Number = NIN_Number || candidate.NIN_Number;
            candidate.currAddress = currAddress || candidate.currAddress;
            candidate.phoneNumber = phoneNumber || candidate.phoneNumber;
            candidate.emailAddress = emailAddress || candidate.emailAddress;
            candidate.candidateAccountFormLink = candidateAccountFormLink || candidate.candidateAccountFormLink;
            candidate.Umbrella = Umbrella || candidate.Umbrella;
            candidate.consultant = consultant || candidate.consultant;
            candidate.candidatePayRate = candidatePayRate || candidate.candidatePayRate;
            candidate.speciality = speciality || candidate.speciality;

            const updatedCandidate = await candidate.save();
            res.status(200).json({ data: updatedCandidate });
        } else {
            res.status(404).json({ message: "Candidate not found" });
        }
    }),

    //To delete a candidate from the DB
    removeCandidate: asyncHandler(async (req, res) => {
        const candidate = await Candidate.findById(req.params.id);

        if (candidate) {
            await candidate.remove();
            res.status(200).json({ message: "Candidate removed" });
        } else {
            res.status(404).json({ message: "Candidate not found" });
        }
    })
};
