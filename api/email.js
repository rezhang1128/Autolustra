const nodemailer = require('nodemailer');

module.exports = async (req, res) => {
    if (req.method === 'POST') {
        const { name, phoneNumber, email, location, carDetails, service, condition } = req.body;

        // Construct email content
        const messageContent = `
            Name: ${name}
            Phone Number: ${phoneNumber}
            Email: ${email}
            Location: ${location}
            Car Make, Model and Year: ${carDetails}
            Enquiring service: ${service}
            Current condition: ${condition}
        `;

        let transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com', // Replace with your email provider's details
            port: 587,
            secure: false, 
            auth: {
                user: 'autolustra@gmail.com', // Replace with your email
                pass: 'spjw fmft rpvj qozd' // Replace with your email password
            }
        });

        let mailOptions = {
            from: 'autolustra@gmail.com', 
            to: 'autolustra@gmail.com', 
            subject: 'New Customer Inquiry', 
            text: messageContent
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return res.status(500).send({ error: error.toString() });
            }
            res.status(200).send({ message: 'Email sent successfully! We will reponse you ASAP' });
        });
    } else {
        res.status(405).send({ error: 'Only POST requests allowed.' });
    }
}
