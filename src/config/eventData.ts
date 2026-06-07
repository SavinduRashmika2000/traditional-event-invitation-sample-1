export interface CulturalProgram {
  id: string;
  title: string;
  description: string;
  imagePath: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  imagePath: string;
}

export interface EventData {
  eventTitle: string;
  eventSubtitle: string;
  organizerName: string;
  eventDate: string;
  eventTime: string;
  eventVenue: string;
  eventVenueUrl: string;
  eventDescription: string;
  royalInvitationMessage: string;
  culturalPrograms: CulturalProgram[];
  galleryItems: GalleryItem[];
  contactDetails: {
    phone: string;
    email: string;
    website: string;
  };
  heritageTitle: string;
  heritageDescription: string;
  heritageQuote: string;
}

export const eventData: EventData = {
  eventTitle: "හෙළ කලා අභිමන්",
  eventSubtitle: "ශ්‍රී ලාංකීය සාම්ප්‍රදායික සංස්කෘතික මහා මංගල්‍යය",
  organizerName: "ශ්‍රී ලංකා ජාතික සංස්කෘතික කලායතනය සහ හෙළ උරුම පදනම",
  eventDate: "2026 සැප්තැම්බර් මස 12 වන සෙනසුරාදා",
  eventTime: "පස්වරු 6:00 සිට",
  eventVenue: "කොළඹ නෙළුම් පොකුණ මහින්ද රාජපක්ෂ රඟහල",
  eventVenueUrl: "https://www.google.com/maps/search/?api=1&query=Nelum+Pokuna+Mahinda+Rajapaksa+Theatre+Colombo",
  eventDescription: "ශ්‍රී ලාංකීය අනන්‍යතාවය ලොවට විදහා දක්වන, පාරම්පරික නර්තන කලා කුසලතාවයන්ගෙන් සහ මනෝහර බෙර වාදනයන්ගෙන් සුසැදි අති උත්කර්ෂවත් සංස්කෘතික ප්‍රසංගය. අපගේ ප්‍රෞඪ ඉතිහාසයේ සහ කලාවේ අසිරිය විඳගැනීමට ඔබට කෙරෙන උදාර ආරාධනයයි.",
  royalInvitationMessage: "හද පත්ලෙන් නැගෙන ශ්‍රී ලාංකීය ආගන්තුක සත්කාරයෙන් යුතුව, අපගේ සංස්කෘතික උරුමයේ මහිමය අභිමානයෙන් යුතුව සමරනු පිණිස පවත්වනු ලබන මෙම උදාර මහෝත්සවයට සහභාගි වන ලෙස ඔබතුමා / ඔබතුමිය වෙත ගෞරවපූර්වකව ආරාධනා කර සිටිමු. ඔබගේ පැමිණීම අපට ඉමහත් ශක්තියක් මෙන්ම ගෞරවයක් වනු ඇත.",
  culturalPrograms: [
    {
      id: "upcountry-dance",
      title: "උඩරට සාම්ප්‍රදායික නර්තනය",
      description: "වෙස් නර්තනයෙන් සහ ගැටබෙර හඬින් හැඩවන, ශ්‍රී ලංකාවේ රාජකීය අභිමානය විදහා දක්වන පූජනීය උඩරට නර්තන සම්ප්‍රදාය.",
      imagePath: "/images/kandyan_dance.png"
    },
    {
      id: "lowcountry-dance",
      title: "පහතරට වෙස් මුහුණු නර්තනය",
      description: "ගුරුළු සහ යක්ෂ වෙස් මුහුණු පැළඳ, පහතරට යක් බෙර හඬට අනුව රඟදක්වන ආවේණික සන්ත්රාසයෙන් හා හාස්‍යයෙන් පිරුණු නර්තන කලාව.",
      imagePath: "/images/heritage_stage.png"
    },
    {
      id: "sabaragamu-dance",
      title: "සබරගමු නර්තන සම්ප්‍රදාය",
      description: "සමන් දෙවි අඩවියේ පාරම්පරික අභිචාර විධි හා බැඳුණු, දවුල් හඬට පා තබන සුවිශේෂී නර්තන ලාලිත්‍යය.",
      imagePath: "/images/cultural_procession.png"
    },
    {
      id: "drum-orchestra",
      title: "පංචතූර්ය බෙර වාදන මංගල්‍යය",
      description: "ගැටබෙර, යක්බෙර, දවුල්, තම්මැට්ටම සහ හොරණෑව යන පංචතූර්ය භාණ්ඩයන්ගේ ස්වර සංකලනයෙන් නැගෙන හෙළ හඬ.",
      imagePath: "/images/drummer.png"
    }
  ],
  galleryItems: [
    {
      id: "g1",
      title: "මංගල බෙර වාදනය",
      imagePath: "/images/drummer.png"
    },
    {
      id: "g2",
      title: "උඩරට වෙස් නර්තන ශිල්පියා",
      imagePath: "/images/kandyan_dance.png"
    },
    {
      id: "g3",
      title: "සාම්ප්‍රදායික පහන දැල්වීම",
      imagePath: "/images/lamp_lit.png"
    },
    {
      id: "g4",
      title: "පෙරහැර මංගල්‍යය",
      imagePath: "/images/cultural_procession.png"
    }
  ],
  contactDetails: {
    phone: "+94 11 2345678 / +94 77 1234567",
    email: "info@helakala.lk",
    website: "www.helakala.lk"
  },
  heritageTitle: "අපගේ අභිමානවත් උරුමය",
  heritageDescription: "වසර දහස් ගණනක් මුළුල්ලේ මව්බිමේ පෝෂණය වූ හෙළ කලාව, අපගේ අනන්‍යතාවයේ පදනමයි. රාජකීය අනුග්‍රහය සහ පූජනීය ඇදහිලි පදනම් කරගනිමින් පරපුරෙන් පරපුරට රැකගෙන ආ මෙම නර්තන හා සංගීත ශෛලීන් සැබවින්ම ලෝක උරුමයකි. අපගේ කර්තව්‍යය වනුයේ මෙම අමිල උරුමය අනාගත පරපුර උදෙසා සුරක්ෂිතව දායාද කිරීමයි.",
  heritageQuote: "කලාව යනු ජාතියක ජීවන ස්පන්දනයයි"
};
