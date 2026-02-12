// ================ CONFIGURAÇÕES E DADOS ================
const LAT = -8.8039;
const LON = -35.6264;

// BASE DE DADOS COMPLETA E ATUALIZADA
const streets = [
    { name: "Avenida Getúlio Vargas", type: "Centro Cívico", sat: "https://maps.google.com/maps?q=-8.8083,-35.6307&t=k&z=19&output=embed", pano: "https://www.google.com/maps/embed?pb=!4v1770734680099!6m8!1m7!1sLYyiPQCwDo1DWrRIeoEF7g!2m2!1d-8.808624!2d-35.63038!3f133!4f-14!5f0.78" },
    { name: "Avenida José Ferreira", type: "Pólo Comercial", sat: "https://maps.google.com/maps?q=-8.8071,-35.6291&t=k&z=19&output=embed", pano: "https://www.google.com/maps/embed?pb=!4v1770734786326!6m8!1m7!1s4U-lnD823daJhC6ttWtdEQ!2m2!1d-8.8074!2d-35.6285!3f266!4f0!5f0.78" },
    { name: "Avenida Tancredo Neves", type: "Via Principal", sat: "https://maps.google.com/maps?q=-8.80775,-35.63054&t=k&z=19&output=embed", pano: "https://www.google.com/maps/embed?pb=!4v1770900010891!6m8!1m7!1scgYwPfALHjstCIy4jspT7Q!2m2!1d-8.807168!2d-35.631614!3f125!4f-8!5f0.78" },
    { name: "Rua São Sebastião", type: "Residencial", sat: "https://maps.google.com/maps?q=-8.80841,-35.62984&t=k&z=19&output=embed", pano: "https://www.google.com/maps/embed?pb=!4v1770898531394!6m8!1m7!1sTxeOXisxKy88zE1OSsAu2g!2m2!1d-8.808568!2d-35.629888!3f36!4f-17!5f0.78" },
    { name: "Rua Maria José", type: "Setor Norte", sat: "https://maps.google.com/maps?q=-8.80790,-35.63168&t=k&z=19&output=embed", pano: "https://www.google.com/maps/embed?pb=!4v1770898683743!6m8!1m7!1sUV0vwndT__qfHN7pySqnxQ!2m2!1d-8.807795!2d-35.631462!3f212!4f-6!5f0.78" },
    { name: "Rua José Caetano da Silva", type: "Logradouro", sat: "https://maps.google.com/maps?q=-8.80781,-35.63232&t=k&z=19&output=embed", pano: "https://www.google.com/maps/embed?pb=!4v1770898822366!6m8!1m7!1s4Iof-pxY1Jr46Bd8rf7dpg!2m2!1d-8.807604!2d-35.632182!3f201!4f-8!5f0.78" },
    { name: "Rua Valdemar Francisco Silva", type: "Logradouro", sat: "https://maps.google.com/maps?q=-8.80761,-35.63257&t=k&z=19&output=embed", pano: "https://www.google.com/maps/embed?pb=!4v1770898912622!6m8!1m7!1sCzN7UFDsrYMzRklaLGwTZw!2m2!1d-8.807454!2d-35.632515!3f190!4f-6!5f0.78" },
    { name: "Rua Profeta Daniel", type: "Bairro Novo", sat: "https://maps.google.com/maps?q=-8.80744,-35.63280&t=k&z=19&output=embed", pano: "https://www.google.com/maps/embed?pb=!4v1770898962895!6m8!1m7!1sCzN7UFDsrYMzRklaLGwTZw!2m2!1d-8.807454!2d-35.632515!3f190!4f-6!5f0.78" },
    { name: "Rua Francisco Guedes", type: "Logradouro", sat: "https://maps.google.com/maps?q=-8.80708,-35.63228&t=k&z=19&output=embed", pano: "https://www.google.com/maps/embed?pb=!4v1770899082177!6m8!1m7!1sXFxbJhgVI8q9hZqr7I5N9w!2m2!1d-8.807382!2d-35.631825!3f281!4f0!5f0.78" },
    { name: "Rua Abraão", type: "Logradouro", sat: "https://maps.google.com/maps?q=-8.80675,-35.63222&t=k&z=19&output=embed", pano: "https://www.google.com/maps/embed?pb=!4v1770899188487!6m8!1m7!1sXFxbJhgVI8q9hZqr7I5N9w!2m2!1d-8.807382!2d-35.631825!3f281!4f0!5f0.78" },
    { name: "Rua Profeta Samuel", type: "Setor Sul", sat: "https://maps.google.com/maps?q=-8.80648,-35.63216&t=k&z=19&output=embed", pano: "https://www.google.com/maps/embed?pb=!4v1770899417532!6m8!1m7!1sBbTtcw2hKAmOPkYsyTZFLw!2m2!1d-8.806712!2d-35.631845!3f299!4f-8!5f0.78" },
    { name: "Rua Profeta Jeremias", type: "Logradouro", sat: "https://maps.google.com/maps?q=-8.80631,-35.63186&t=k&z=19&output=embed", pano: "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1!2d-35.6317621!3d-8.8064242!2m3!1f296!2f82!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1spt-BR!2sbr!4v1770899450000!6m8!1m7!1snwiNnga6wnVmNHRRVgS6PA!2m2!1d-8.806424!2d-35.631762!3f296!4f0!5f0.78" },
    { name: "Rua Ananias Tavares", type: "Extremo Oeste", sat: "https://maps.google.com/maps?q=-8.80603,-35.63234&t=k&z=19&output=embed", pano: "https://www.google.com/maps/embed?pb=!4v1770899632195!6m8!1m7!1sQlhp6jOGEeTe4TyxVkJRMg!2m2!1d-8.806236!2d-35.632171!3f298!4f-9!5f0.78" },
    { name: "Rua Projetada 02", type: "Novo Logradouro", sat: "https://maps.google.com/maps?q=-8.80543,-35.63233&t=k&z=19&output=embed", pano: null },
    { name: "Rua Projetada 03", type: "Novo Logradouro", sat: "https://maps.google.com/maps?q=-8.80546,-35.63258&t=k&z=19&output=embed", pano: null },
    { name: "Rua Projetada 04", type: "Novo Logradouro", sat: "https://maps.google.com/maps?q=-8.80568,-35.63272&t=k&z=19&output=embed", pano: null },
    { name: "Rua Sete de Setembro", type: "Central", sat: "https://maps.google.com/maps?q=-8.80664,-35.63141&t=k&z=19&output=embed", pano: "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1!2d-35.6315012!3d-8.8072014!2m3!1f15!2f84!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1spt-BR!2sbr!4v1770900100000!6m8!1m7!1sgOrICOc3_tFf9xXvMIczGw!2m2!1d-8.807201!2d-35.631501!3f15!4f0!5f0.78" },
    { name: "Rua Maria de Fátima", type: "Residencial", sat: "https://maps.google.com/maps?q=-8.80757,-35.62949&t=k&z=19&output=embed", pano: "https://www.google.com/maps/embed?pb=!4v1770903530712!6m8!1m7!1sgLy1tOz79v4Q3YJ67YCv-A!2m2!1d-8.807979!2d-35.629773!3f43!4f-11!5f0.78" },
    { name: "TV. Primeira do Sol", type: "Acesso Sol", sat: "https://maps.google.com/maps?q=-8.80757,-35.62912&t=k&z=19&output=embed", pano: "https://www.google.com/maps/embed?pb=!4v1770903641385!6m8!1m7!1sAubtHF0OEEFN4giMDTVksA!2m2!1d-8.807701!2d-35.629181!3f133!4f-25!5f0.78" }
];

const weatherMap = {
    0: ["Céu Limpo", "☀️"], 
    1: ["Limpo", "🌤️"], 
    2: ["Sol entre nuvens", "⛅"],
    3: ["Nublado", "☁️"], 
    45: ["Neblina", "🌫️"], 
    51: ["Garoa", "🌦️"],
    61: ["Chuva Leve", "🌧️"], 
    63: ["Chuva", "🌧️"], 
    80: ["Pancadas", "🌦️"], 
    95: ["Trovoadas", "⛈️"]
};
