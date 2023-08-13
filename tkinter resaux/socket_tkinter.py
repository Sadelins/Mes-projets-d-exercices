from tkinter import *

root=Tk()
root.title("serveur")
root.geometry("400x500")
#root.resizable(width=False,height=False)



#-----------function  pour faire pack_forget de la page d'acceuil-----------


def pack_forget_home():
    hr.pack_forget()
    home.pack_forget()



hr=Label(root,bg="green",height=2,width=800)
hr.pack()

#--------------------le pack d'accueil-------------------

home=Frame(root, bg="green")


text_daccueil=Label(home, text="Interface serveur :")
text_daccueil.pack()


home.pack(expand=YES)


#--------------------le pack d'accueil dans le frame principal-------------------


#home.pack_forget()




root.mainloop()