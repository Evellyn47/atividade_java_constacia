class MinhaClasse {
   constructor() {
       this.tarefas = [];
   }

   adicionarTarefa(descricao) {
       this.tarefas.push({ descricao, concluida: false });
   }

   listarTarefas() {
       console.log("Lista de Tarefas:");
       this.tarefas.forEach((tarefa, index) => {
           const status = tarefa.concluida ? "Concluída" : "Pendente";
           console.log(`${index + 1}. ${tarefa.descricao} (${status})`);
       });
   }

   marcarTarefaConcluida(indice) {
       if (this.tarefas[indice]) {
           this.tarefas[indice].concluida = true;
           console.log(`A tarefa "${this.tarefas[indice].descricao}" foi marcada como concluída.`);
       } else {
           console.log("Índice inválido.");
       }
   }
}

const minhaInstancia = new MinhaClasse();

minhaInstancia.adicionarTarefa("Fazer compras");
minhaInstancia.adicionarTarefa("Estudar JavaScript");
minhaInstancia.adicionarTarefa("Fazer exercícios");

minhaInstancia.listarTarefas();
minhaInstancia.marcarTarefaConcluida(1);

minhaInstancia.listarTarefas();
