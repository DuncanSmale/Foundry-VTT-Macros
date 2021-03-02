let crownOfMadnessFunction = async function () {
  let params = [{
    filterType: "glow",
    filterId: "crownOfMadness",
    outerStrength: 4,
    innerStrength: 0,
    color: 0xcc0000,
    quality: 0.5,
    padding: 10,
    animated: {
      color: {
        active: true,
        loopDuration: 3000,
        animType: "colorOscillation",
        val1: 0xcc0000,
        val2: 0xff4c4c
      }
    }
  }];

  let icon = "/icons/commodities/metal/fragments-steel-barbed.webp";
  for(const token of canvas.tokens.controlled) {
    token.toggleEffect(icon);
    if(token.TMFXhasFilterId(params[0]["filterId"])){
      await token.TMFXdeleteFilters(params[0]["filterId"])
    } else {
      await token.TMFXaddUpdateFilters(params)
    }
  }
}

crownOfMadnessFunction();