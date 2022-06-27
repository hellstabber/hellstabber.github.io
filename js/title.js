var _____WB$wombat$assign$function_____ = function (name) {
  return (
    (self._wb_wombat &&
      self._wb_wombat.local_init &&
      self._wb_wombat.local_init(name)) ||
    self[name]
  );
};
if (!self.__WB_pmw) {
  self.__WB_pmw = function (obj) {
    this.__WB_source = obj;
    return this;
  };
}
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

  ("use strict");

  function handleVisibilityChange() {
    if (document.hidden) {
      setTimeout(function () {
        if (document.hidden) setTitle("hellstabber asleep now 😴");
      }, 6000);
    } else {
      setTitle("hellstabber | " + getRandomGreeting() + "!");
    }
  }

  function getRandomGreeting() {
    const greetings = [
      "Bonjour",
      "Merhaba",
      "Salam",
      "Привет",
      "Hola",
      "你好",
      "Salve",
      "こんばんは",
      "Guten Tag",
      "Olá",
      "안녕하세요",
      "Goedendag",
      "Yassas",
      "Namaste",
    ];
    return greetings[Math.floor(Math.random() * greetings.length)];
  }

  function setTitle(title) {
    document.title = title
      ? title
      : "hellstabber | " + getRandomGreeting() + "!";
  }

  document.addEventListener("visibilitychange", handleVisibilityChange, true);
  setTitle();
}
