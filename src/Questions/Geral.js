import React from "react";
import Component from "./Panel/Component";
import QUESTIONS from "./Questions";
import swal from "sweetalert";

export default class Geral extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            question: 0,
            buttons: {
                1: false,
                2: false,
                3: false,
                4: false,
                5: false,
            },
            valueMe: 0,
            valueClient: 0,
        }
    }

    componentDidMount = () => {
        const arr = Object.keys(QUESTIONS);
        this.setState({ arr, control: {
            client: [],
            me: []
        }});
    };

    onPrevious = () => {
        if (this.state.question === 0) {
            swal("Atenção", "Não é possível voltar mais, clique em PROXIMO.", "warning");
        } else {
            this.setState((state) => ({
                ...state,
                control:{
                    client: [...state.control, {question: state.question, value: state.value}],
                    me: [...state.control, {question: state.question, value: state.value}],
                } ,
                question: this.state.question - 1
            }));
        }
    };

    onNext = () => {
        if (this.state.question === this.state.arr.length - 1) {
            swal("Atenção", "Não é possível avançar mais, clique em ANTERIOR ou FINALIZE sua avaliação.", "warning");
        } else {
            this.setState((state) => ({
                ...state,
                control:{
                    ...state.control,
                    client: [...state.control.client, {question: state.question, value: state.valueClient}],
                    me: [...state.control.me, {question: state.question, value: state.valueMe}],
                },
                question: this.state.question + 1
            }));
        }
    };

    onSelectNumber = (number) => {
        this.setState((state) => ({
            ...state,
            valueMe: number,
            valueClient: state.valueClient,
            buttons: {
                ...state.buttons,
                [number]: !this.state[number]
            }
        }));
    };

    onSelectNumberClient = (number) => {
        this.setState((state) => ({
            ...state,
            valueMe: state.valueMe,
            valueClient: number,
            buttons: {
                ...state.buttons,
                [number]: !this.state[number]
            }
        }));
    };

    render() {
        const {buttons} = this.state;
        return (
            <div className="container-inside">
                <Component
                    title={'Planejar e Organizar (PO) > Adquirir e Implementar (AI) > Entregar e Suportar (DS) > Monitorar e Avaliar (ME)'}
                    question={QUESTIONS[this.state.question]}
                    right={this.state.right}
                />
                <div className="panel panel-primary green">
                    <div className="panel-heading">
                        <h3 className="panel-title">{"Controle"}</h3>
                    </div>
                    <div className="panel-body">
                        <h4>Níveis de Seleção Cliente</h4>
                        <button onClick={() => this.onSelectNumberClient(1)} className="control-number-button active">1</button>
                        <button onClick={() => this.onSelectNumberClient(2)} className="control-number-button">2</button>
                        <button onClick={() => this.onSelectNumberClient(3)} className="control-number-button">3</button>
                        <button onClick={() => this.onSelectNumberClient(4)} className="control-number-button">4</button>
                        <button onClick={() => this.onSelectNumberClient(5)} className="control-number-button">5</button>
                        <br/>
                        <h4>Níveis de Seleção Eu</h4>
                        <button onClick={() => this.onSelectNumber(1)} className="control-number-button active">1</button>
                        <button onClick={() => this.onSelectNumber(2)} className="control-number-button">2</button>
                        <button onClick={() => this.onSelectNumber(3)} className="control-number-button">3</button>
                        <button onClick={() => this.onSelectNumber(4)} className="control-number-button">4</button>
                        <button onClick={() => this.onSelectNumber(5)} className="control-number-button">5</button>
                        <hr/>
                        <button onClick={this.onPrevious} className="control-nav-button">ANTERIOR</button>
                        <button onClick={this.onNext} className="control-nav-button">PROXIMO</button>
                        <button onClick={() => sessionStorage.setItem('control', JSON.stringify(this.state.control))} className="control-nav-button">FINALIZAR</button>
                    </div>
                </div>
            </div>
        );
    }
}