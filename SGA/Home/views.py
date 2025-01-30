from django.shortcuts import render

alunos = [
        {"nome": "Aluno 1", "notas": [8, 7.5, 9]},
        {"nome": "Aluno 2", "notas": [6, 5.5, 7]},
        {"nome": "Aluno 3", "notas": [9, 8.5, 9.5]},
        {"nome": "Aluno 4", "notas": [4, 6, 5]},
    ]

def index(request):
    return render(request, 'index.html')

def avaliacao(request):
    return render(request, 'avaliacao.html')

def relatorio(request):
    return render(request, "relatorio.html")

def cadastro(request):
    return render(request, 'cadastro.html')