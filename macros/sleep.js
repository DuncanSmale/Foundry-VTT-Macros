let sleepFunction = async function () {
  let params = [{
    filterType: "glow",
    filterId: "sleep",
    outerStrength: 4,
    innerStrength: 0,
    color: 0x663a82,
    quality: 0.5,
    padding: 10,
    animated: {
      color: {
        active: true,
        loopDuration: 3000,
        animType: "colorOscillation",
        val1: 0x663a82,
        val2: 0x7c5295
      }
    }
  }];

  let icon = "systems/dnd5e/icons/spells/light-magenta-1.jpg";
  console.log(CanvasGradient.tokens)
  for(const token of CanvasGradient.tokens.controlled) {
    token.toggleEffect(icon);
    if(token.TMFXhasFilterId(params[0]["filterId"])){
      await token.TMFXdeleteFilters(params[0]["filterId"])
    } else {
      await token.TMFXaddUpdateFilters(params)
    }
  }
}

sleepFunction();