const b = baffle('.data')
b.set({
  speed: 150,
  characters: 'অআইঈউঊএঐওঔকখগঘঙচছজঝঞটঠডঢণতথদধনপফবভময়ড়ঢ়যরলহশষস',
  // ex
  // characters: 'supercalifragilisticexpialidocious',
  // ▒▓▓█ ░▓░▓ ▒█░ ▓░▒█ ▒▓███ ██< >▒░░░ ░▓█▒█ /▓░
})
b.start()
b.reveal(3000)
