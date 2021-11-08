from _typeshed import Self


class DB_Account:
    def __init__(self):
        self._username=""
        self.__pwd=""
        self._name=""
        self._ID=0
        self.__balance=0
        self.__history=[]
    # # là private nên chỉ có 1 _
    # private thì tên có 2 __

    def login (self,username, pwd): 
        return True
    def Account (self,username, pwd, name):
        return DB_Account(self)
    def newPwd(self,username, newpwd):
        return True
    def editInfo(self,edited): 
        return True
    def update(self,id, amount):
        return True
    def getHistory(self,id): 
        return []#List[TransSaction]
    def Signup(self,username, password):
        return True
    def query(self,username, pwd): pass
    def updateAccount(self,Account): pass
    def upgrade(self,userid, role, resID): pass
    def getIdres(self): return  self.__idRes
    def select(self,begin,end, name):
        return []#[foodOrdInfo]
    def showMessage(self,mess): pass

class Table_OrderInfo:
    def __init__(self):
        self._tab
        self._customer
        self._start
        self._end
        self._stateOrder
        self._QR
        self._AtRes
        

    def selectTable(self, tab, idCus): pass
    def selectTime(self): pass
    def getQR(self): pass
    def createTableOrdInfo(self, place): pass
    def setState(self, aval): pass
    def printTOrd(self): pass

class Food_OrderInf:
    def __init__(self):
        self._idOrd=0
        self._stateCode=""
        self._total=0
        self._ordTime
        self._foodList=[]
        self._stateOrder=0
        self._statePayment=False
        self._QR
        self._ReasonCancel
        self._customer
        self._FormRes
        

    def AddFood(self, Food, num):pass
    def DeleteFood(self, indexFood):pass
    def UpdateNumFood(self, Food, num):pass
    def getQR(self):pass
    def createOrd(self, cart):pass
    def setReason(self, reason):pass
    def printDetailOrd(self):pass
    def showListFood(self):pass

class Customer:
    def __init__(self):
        self.__phone=""
        self.__confirmedFO=[]
        self.__confirmedTO=[]
        self.__cart=[]

    def orderTable(self, idRes):pass
    def cancelTable(self, ord):pass
    def confirmedTable(self):pass
    def showTOrder(self, idx):pass
    def cancelFoodOrd(self, ord):pass
    def updateFood(self, id):pass
    def pay(self):pass
    def deposit(self,IDATM,IDPIN, rut):pass
    def searchTran(self):pass
    def showRes(self):pass
    def showMenu(self, res):pass
    def showListOrd(self):pass
    def showInfoOrd(self, id):pass
    def showTable(self, res):pass
    def showMessage(self, mess):pass
    def confirmedOrder(self):pass
    def cancelFoodOrder(self, id, reason):pass
    def createRateRes(self, cmt, star, resID):pass
    def createRateFood(self, star, resID, cmt, foodID):pass
    def getHistory(self):pass
    def showListOrdRecieved(self):pass
    def Logout(self):pass
    def Login(self, username, password):pass
    def update(self, Accout):pass
    def showListFood(self):pass
    def showMenu(self, idRes):pass
    def showFood(self, nameFood):pass
    def addFood(self, idRes, nameFood, num):pass
    def showCart(self):pass
    def addNote(self, food, note):pass
    def incr(self, idRes, nameFood):pass
    def decr(self, idRes, nameFood):pass
    def dele(Self, idRes, nameFood):pass
    def orderFood(self):pass


class Human_Resources:
    def __init__(self):
        self._workfor

class Agent:
    def receiveTableOeder(self):pass
    def updateTable(self, id, seat):pass
    def changeListTable(self): pass

class Manager:
    def receiveReport(self):pass
    def recieveFood(delf):pass
    def changeRestaurantDetail(self):pass
    def changeRestaurantMenu(self):pass
    def checkTicket(self, TicketList):pass
    def assignRole(self, ID):pass
    def checkResAverage(self):pass
    def updateFoodState(self, IDFood, isempty):pass
    def searchOrder(self, begin, end, food):pass
    def searchFood(self, id):pass
    def searchPhone(self, Ordld):pass
    def assign(self, userid, res):pass
    def selectMenuButton(self):pass
    def chooseFood(self, foodName):pass
    def setFoodName(self, foodName):pass
    def setFoodPic(self, foodPic, foodName):pass
    def setFoodPri(self, foodRri, foodName):pass
    def setFoodSta(self, foodSta, foodName):pass
    def deleteFood(self, food, foodName):pass
    def showMess(self, Mess):pass

class Chef:
    def __init__(self):
        self._List_FoodOrdInfo

    def takOrd(self, idBill):pass
    def setDone(self, idBill):pass
    def getCustomer(self, Bill):pass
    def cancelOrder(self, idBill):pass
    def viewOrdList(self, idRes):pass
    def viewOrd(self, idBill):pass

class Admin:
    def receiveData(self):pass
    def createRestaurant(self):pass
    def maintanaince(self):pass
    def assignRole(self, ID):pass
    def newRes(self, Res):pass
    def assign(self, userid, res):pass
    def showMessage(self, mess):pass

class Transaction:
    def __init__(self):
        self._idATM=0
        self._time
        self._amount=0.0


class Table:
    def __init__(self):
        self._id=0
        self._belongto
        self._seat=[]
        self._State=False

    def Table(self, Res, seat):pass
    def setState(self, aval):pass

class Food:
    def __init__(self):
        self._price=0
        self._name=""
        self._type
        self._pic=""
        self._star=[]
        self._State=False
        self._CMT=""
        self._star=0
        self._belongto

    def createFood(self, Res):pass
    def setName(self, name):pass
    def getDetail(self):pass
    def setState(self, aval):pass
    def addReview(self, Star):pass
    def Average(self):pass
    def setCMT(self, cmt):pass
    def setStar(self, satr):pass


class DB_Restaurant:
    def __init__(self):
        self._IDRes=0
        self.__BankNum=0
        self.__BankName=""
        self._address=""
        self._Phone=""
        self._name=""
        self._menu=[]
        self._tableList=[]
        self._QR
        self._CMT=[]
        self._star=0


    def newManager(self, ID):pass
    def newFood(self, newDish):pass
    def removeFood(self, food):pass
    def editFood(self, food):pass
    def changeFInfo(self):pass
    def showListTable(self):pass
    def showListFood(self):pass
    def getFoodCart(self, username):pass
    def getIDATM(self):pass
    def setCMT(self, cmt):pass
    def setStar(self, star):pass
    def showFood(self, foodName):pass
    def checkFoodName(self, foodName):pass
    def saveFoodName(self, foodName):pass
    def saveFoodPic(self, foodPic, foodName):pass
    def saveFoodPri(self, foodPri, foodName):pass
    def saveFoodSta(self, foodSta, foodName):pass
    def deleteFoodInf(self, food, foodName):pass
    def saveOrd(self, ord):pass
    def delOrd(self, idBill):pass
    def doneOrd(self, idBill):pass
    def takeOrd(self, idBill):pass
    def getOrdList(self):pass
    def getOrd(self, idBill):pass
    def getFood(self, nameFood):pass
    def InsertRes(self, Res):pass