listA = ["a","1","c","d","k","l","m","7","8","9","10","11","12","13","e","f","g","h","i","j"]
listB = ["0","b","2","v","w","x","y","z","3","4","5","6","t","u","n","o","p","q","r","s"]
Tbmd = []

def mot_de_pass_cript(md,opt):
      _md_genere = ""
      md  = md.lower()
      _taille = len(md)

      _md = md

      for i in range (0,_taille):
        Tbmd.append(md[i])


      for i in range (0,_taille):
        for j in range(0,20):
          if(Tbmd[i] == listA[j]):
            Tbmd[i]=listB[j]
          elif(Tbmd[i]== listB[j]):
            Tbmd[i]=listA[j]

      for i in range (0,_taille):
        _md_genere +=Tbmd[i]

      return _md_genere

