const postcodes: {[key: string]: string[]} = {
    Harwich: ["CO12"],
    Colchester: ["CO1", "CO2", "CO3", "CO4", "CO5", "CO6", "CO7"],
    Ipswich: ["IP1", "IP2", "IP3", "IP4", "IP5", "IP6", "IP7", "IP8", "IP9", "IP10"],
    ClactonOnSea: ["CO15", "CO16"],
    FrintonOnSea: ["CO13"],
    Manningtree: ["CO11"],
    Stowmarket: ["IP14"],
    Newmarket: ["CB8"],
    Braintree: ["CM7", "CM77"],
    Chelmsford: ["CM1", "CM2", "CM3"]
};

const locations = [
    "Harwich", "Colchester", "Ipswich", "ClactonOnSea", "FrintonOnSea", "Manningtree", "Stowmarket", "Newmarket", "Braintree", "Chelmsford"
]

export { postcodes, locations }