interface WhatsAppButtonProps {
  phoneNumber: string;
  message: string;
  className?: string;
}

const WhatsAppButton = ({ phoneNumber, message, className = '' }: WhatsAppButtonProps) => {
  const encodedMessage = encodeURIComponent(message);
  const sanitizedNumber = phoneNumber.replace(/[^\d+]/g, '');
  const whatsappUrl = `https://wa.me/${sanitizedNumber}?text=${encodedMessage}`;

  return (
    <a 
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center bg-brand-dark text-white text-[11px] tracking-[0.3em] uppercase font-medium hover:bg-brand-gold transition-colors duration-500 ${className}`}
    >
      Enquire on WhatsApp
    </a>
  );
};

export default WhatsAppButton;
