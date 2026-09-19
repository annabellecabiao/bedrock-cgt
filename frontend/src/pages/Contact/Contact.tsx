export default function Contact() {
  return (
    <div className="min-h-screen bg-bedrock-white px-6 py-10">
      <h1 className="text-3xl font-serif text-bedrock-navy mb-6">
        Contact Us
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="bg-white shadow-card rounded-lg border border-bedrock-slate/20 p-6">
          <h2 className="text-xl font-serif text-bedrock-navy mb-4">
            Get in Touch
          </h2>
          <p className="text-bedrock-slate mb-2">
            Business Address: Valencia, Spain
          </p>
          <p className="text-bedrock-slate mb-2">
            Phone: +34 XXX XXX XXX
          </p>
          <p className="text-bedrock-slate mb-2">
            Email: info@bedrockcgt.com
          </p>
          <p className="text-bedrock-slate mt-4">
            You can also reach us via Facebook, WhatsApp, Telegram, Instagram, and YouTube.
          </p>
        </div>

        <div className="bg-white shadow-card rounded-lg border border-bedrock-slate/20 p-6">
          <h2 className="text-xl font-serif text-bedrock-navy mb-4">
            Inquiry Form
          </h2>

          <div className="mb-4">
            <label className="block text-bedrock-navy font-medium mb-1">
              Name
            </label>
            <input
              type="text"
              className="w-full border border-bedrock-slate rounded-md px-3 py-2 focus:outline-bedrock-gold"
            />
          </div>

          <div className="mb-4">
            <label className="block text-bedrock-navy font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              className="w-full border border-bedrock-slate rounded-md px-3 py-2 focus:outline-bedrock-gold"
            />
          </div>

          <div className="mb-4">
            <label className="block text-bedrock-navy font-medium mb-1">
              Message
            </label>
            <textarea
              className="w-full border border-bedrock-slate rounded-md px-3 py-2 focus:outline-bedrock-gold"
              rows={4}
            ></textarea>
          </div>

          <button className="bg-bedrock-gold text-bedrock-navy font-semibold px-6 py-3 rounded-md shadow-card hover:brightness-110">
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
}

