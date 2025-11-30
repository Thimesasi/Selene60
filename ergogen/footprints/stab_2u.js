// footprints/stab_2u.js

module.exports = {
  params: {
    class: 'STAB2U',
  },

  body: p => `
    (module STAB_2U_PCB (layer F.Cu) (tedit 5A52E4A3)
      ${p.at}

      (fp_text reference "${p.ref || "STAB2U"}" (at 0 0) (layer F.SilkS) hide)
      (fp_text value "STAB_2U_PCB" (at 0 -2) (layer F.Fab) hide)

      (pad "" np_thru_hole circle
        (at -11.9 7)
        (size 3.05 3.05)
        (drill 3.05)
        (layers *.Cu *.Mask))

      (pad "" np_thru_hole circle
        (at 11.9 7)
        (size 3.05 3.05)
        (drill 3.05)
        (layers *.Cu *.Mask))

      (pad "" np_thru_hole circle
        (at -11.9 -8.24)
        (size 4 4)
        (drill 4)
        (layers *.Cu *.Mask))

      (pad "" np_thru_hole circle
        (at 11.9 -8.24)
        (size 4 4)
        (drill 4)
        (layers *.Cu *.Mask))
    )
  `,
};
