// I'll use factory functions because I want to practice this function that I'm learning.
// Vou utilizar factory function para praticar esta função que estou aprendendo

function criaCalculadora() {
    return{
        //Properties
        display: document.querySelector('.display'),
        btnClear: document.querySelector('.btn-clear'),
        
        
        
        //Methods
        inicia(){
            this.cliqueBotoes()
            this.pressionaEnter()
        },

        pressionaEnter(){
            this.display.addEventListener('keyup', e =>{
                if(e.keyCode === 13){
                    this.realizaConta()
                } 
            })
        },
        cliqueBotoes(){
            document.addEventListener('click', e => {
                const el = e.target

                if(el.classList.contains('btn-num')){
                    this.btnParaDisplay(el.innerText)
                }

                if(el.classList.contains('btn-clear')){
                    this.clearDisplay()
                }

                if(el.classList.contains('btn-del')){
                    this.delUm()
                }

                if(el.classList.contains('btn-eq')){
                    this.realizaConta()
                }

                this.display.focus()
            })
        },
        btnParaDisplay(valor){
            this.display.value += valor
        },
        clearDisplay(){
            this.display.value = ''
        },
        delUm(){
            this.display.value = this.display.value.slice(0,-1)
        },
        realizaConta(){
            let conta = this.display.value

            try{
                conta = eval(conta)

                if(!conta){
                    alert('Conta inválida!')
                    return
                }

                this.display.value = String(conta)

            } catch(e) {
                alert('Conta inválida!')
                return
            }

        }
    }
}

const calculadora  = criaCalculadora()
calculadora.inicia()