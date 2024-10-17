'use client';
import contactInfos from './ContactInfo';
import ReseauSociaux from '../ReseauSociaux/ReseauSociaux';

const ContactSection = () => {
  return (
    <div className="h-full pr-6">
      <p className="mt-3 mb-12 text-lg text-slate-400 md:pt-11">
        Pour toute demande d&apos;information ou pour discuter de tes projets numériques, n&apos;hésite pas à me contacter. Mon équipe est disponible pour t&apos;accompagner et répondre à tes besoins spécifiques.
      </p>
      <ul className="mb-6 md:mb-0">
        {contactInfos.map((info) => (
          <li key={info.title} className="flex">
            <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
              <info.icon />
            </div>
            <div className="ml-4 mb-4">
              <h3 className="mb-2 text-lg font-medium leading-6 text-white">{info.title}</h3>
              {info.details.map((detail, detailIndex) => (
                <p key={detailIndex} className="text-slate-400">{detail}</p>
              ))}
            </div>
          </li>
        ))}
      </ul>
      <ReseauSociaux/>
    </div>
  );
};

export default ContactSection;
