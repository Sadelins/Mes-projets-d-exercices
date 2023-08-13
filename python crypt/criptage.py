from cript.cript import *
from tkinter import *


def cryp():

    md = boite_saisir.get()
    _md_genere = mot_de_pass_cript(md,1)
    Label_text = Label(text="Le mot de passe a bien été cripté :",bg="#000",width=40,font=("Bahnschrift Light",8,"bold"),fg="white")
    Label_text.place(y=90,x=50)
    _md_genere1.config(text=f"{_md_genere}")
  



root = Tk()
root.config(bg="#AAF")
root.title("Criptage de mdp")
root.geometry("500x400")
root.resizable(width=False,height=False)


Label_text = Label(text="Bienvenu sur la plateforme qui vous aides à cripter des mots ou groupes de mot",bg="#AAF",width=100,font=("Bahnschrift Light",8,"bold"))
Label_text.pack()

Canvas1 = Canvas(bg="#000",width=800,height=12)
Canvas1.pack()


Canvas2 = Canvas(bg="#000",width=400,height=72,border=7)
Canvas2.place(y=80,x=45)

Label_text2 = Label(text="Entrez le mot de pass :",bg="#AAF",width=100,font=("Bahnschrift Light",8,"bold"))
Label_text2.place(y=180,x=-240)



_md_genere1=Label(text="",bg="black",fg="white",font=23)
_md_genere1.place(y=120,x=85)

btt_envoyer = Button(text="Envoyer",bg="#AAF",font=("Bahnschrift Light",8,"bold"),command=cryp)
btt_envoyer.place(y=230,x=45)

boite_saisir = Entry(text="mdp",bg="#000",bd=2,font=23,fg="white")
boite_saisir.place(y=200,x=45)

root.mainloop()


