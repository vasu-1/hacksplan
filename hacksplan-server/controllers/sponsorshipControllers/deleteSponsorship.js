const appwrite = require("../../appwrite/appwrite-config");
const { ID, Query } = require("node-appwrite");
const database_sponsorships = process.env.database_sponsorships;
const collection_company_sponsor = process.env.collection_company_sponsor;

const deleteSponsorship = async (req, res, next) => {
  const { id } = req.params;
  if (!id) {
    return res.status(422).json({ error: "Id is not defined!" });
  }
  try {
    appwrite.databases
      .deleteDocument(database_sponsorships, collection_company_sponsor, id)
      .then(
        function (response) {
          return res.status(200).send({ "message": "Sponsorship successfully deleted!" });
        },
        function (error) {
          console.log(error.response.message);
          return res.status(500).json({ error: error.response.message });
        }
      );
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  deleteSponsorship,
};
