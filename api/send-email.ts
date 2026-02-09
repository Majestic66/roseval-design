import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, projectType, message } = req.body;

    if (!name || !email || !projectType || !message) {
      return res.status(400).json({ error: 'Tous les champs sont requis' });
    }

    // Envoyer l'email à Roseval
    const response = await resend.emails.send({
      from: 'devis@roseval.design',
      to: 'roseval.design@gmail.com',
      subject: `Nouvelle demande de devis - ${projectType}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background: #f5f5f5;">
          <div style="background: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <h2 style="color: #4f46e5; margin-bottom: 20px;">📩 Nouvelle demande de devis</h2>
            
            <div style="background: #f9fafb; padding: 15px; border-radius: 8px; margin-bottom: 20px;">
              <p style="margin: 10px 0;"><strong>Nom/Entreprise:</strong> ${name}</p>
              <p style="margin: 10px 0;"><strong>Email de contact:</strong> ${email}</p>
              <p style="margin: 10px 0;"><strong>Type de projet:</strong> ${projectType}</p>
            </div>

            <div style="margin-top: 20px;">
              <h3 style="color: #374151; margin-bottom: 10px;">Détails du projet:</h3>
              <p style="background: white; padding: 15px; border-left: 4px solid #4f46e5; line-height: 1.6; color: #555;">
                ${message.replace(/\n/g, '<br>')}
              </p>
            </div>

            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
              <p style="color: #6b7280; font-size: 14px;">
                Pour répondre à cette demande, <a href="mailto:${email}" style="color: #4f46e5; text-decoration: none;">cliquez ici</a>
              </p>
            </div>
          </div>
        </div>
      `,
    });

    res.status(200).json({ success: true, message: 'Devis envoyé avec succès!' });
  } catch (error) {
    console.error('Erreur lors de l\'envoi:', error);
    res.status(500).json({ error: 'Erreur lors de l\'envoi du devis' });
  }
}
