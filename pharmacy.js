export class Drug {
  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }
}

function verif(test){
    if (test > 50){
      test = 50;
    }
    if (test < 0){
      test = 0;
    }
    return test
  }

  function increment(plus,nombre){

      plus = plus + nombre;

      return plus
    }

  function decrement(moin,nombre){

        moin = moin - nombre;

        return moin
      }

export class Pharmacy {
  constructor(drugs = []) {
    this.drugs = drugs;
  }

  updateBenefitValue() {
    for (var i = 0; i < this.drugs.length; i++) {

        this.drugs[i].expiresIn = decrement(this.drugs[i].expiresIn,1);

        const expr = this.drugs[i].name ;
        switch (expr) {
          case 'Doliprane':
            if (this.drugs[i].expiresIn >= 0 ) {
              this.drugs[i].benefit = decrement(this.drugs[i].benefit,1);
            }else {
              this.drugs[i].benefit = decrement(this.drugs[i].benefit,2);
            }
            this.drugs[i].benefit = verif(this.drugs[i].benefit);
            continue;
          case 'Herbal Tea':
            if (this.drugs[i].expiresIn >= 0 ) {
              this.drugs[i].benefit = increment(this.drugs[i].benefit,1);
            }else {
              this.drugs[i].benefit = increment(this.drugs[i].benefit,2);
            }
              this.drugs[i].benefit = verif(this.drugs[i].benefit);
            continue;
          case 'Fervex':

            if ( this.drugs[i].expiresIn > 11){
              this.drugs[i].benefit = increment(this.drugs[i].benefit,1);
            }else{
              if ( this.drugs[i].expiresIn > 6){
                this.drugs[i].benefit = increment(this.drugs[i].benefit,2);
              }else{
                if ( this.drugs[i].expiresIn > 0){
                  this.drugs[i].benefit = increment(this.drugs[i].benefit,3);
                }else{
                  this.drugs[i].benefit = 0;
                }
              }
            }
            this.drugs[i].benefit = verif(this.drugs[i].benefit);
            continue;
          case 'Magic Pill':
            this.drugs[i].expiresIn = increment(this.drugs[i].expiresIn,1);
            this.drugs[i].benefit = decrement(this.drugs[i].benefit,1);
            this.drugs[i].benefit = verif(this.drugs[i].benefit);
            continue;
          case 'Dafalgan':
            this.drugs[i].benefit = decrement(this.drugs[i].benefit,2);
            this.drugs[i].benefit = verif(this.drugs[i].benefit );
            continue;
          default:
            console.log(`Sorry, we haven't ${expr}.`);
    }
  }

    return this.drugs;
  }
}
