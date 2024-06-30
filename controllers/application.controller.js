const uuid = require('uuid');

const processApplication = async (req, res) => {
    const application = req.body;
    // Validate the user input

    //TODO: perform the necessary processing
    
    application.applicationId = uuid.v4();
    console.log("Application processed successfully", application);
    res.json({ ...application, status: 'Processed'});
}

const getApplication = async (req, res) => {
    const applicationId = req.query.appId
    if(!applicationId){
        return res.status(400).json({
            message: "applicationId (appId) is required and must be a valid UUID" 
        });
    } else if (uuid.validate(applicationId) === false){
        return res.status(400).json({ 
            message: "applicationId (appId) must be a valid UUID" 
        });
    }

    // Get the application from the database
    const application = { applicationId: "1234", name: "Test Application" };
    
    res.json(application);
}

module.exports = { processApplication, getApplication };