import {useRef, useEffect, useState} from "react"
import { Card, CardHeader,  CardTitle,CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {Input }from "@/components/ui/input"

function QualityTracker(){
    const[sessions,setsessions] = useState(0);
    const inputRef= useRef<HTMLInputElement >(null);
    useEffect( ()=>{
        document.title = 'study sessions:${sessions}';
    }, [sessions]
)
 function addItems(){
                setsessions(sessions + 1)
            }
            function removeItems(){
                setsessions( sessions - 1)
            }

            function resetItems(){
                setsessions(0)
            }
            
        return(
             <div className="min-h-screen   flex items-center justify-center p-6">

           <Card className="w-96 shadow-xl bg-white border-0 rounded-2xl">
            <CardHeader className="text-cener ">
                <CardTitle className="text-3xl flex justify-center items-center text-purple-500">
                    Shopping Cart
                </CardTitle>
              
            </CardHeader>

            <CardContent>
              
                <div className="mb-6">
                    <br />
                    <p className="mb-2 font-medium text-center text-purple-500">
                        Customer  Name
                    </p> 
                    <br />
                    <Input ref={inputRef} placeholder="Enter your name"></Input>
                </div>

                <br />
                <div className="mb-6 text-center">
                    <p className=" text-sm text-slate-500 ">
                        $25 each
                    </p>

                    <h2 className="text-6xl font-bold text-purple-300 my-2">
                        {sessions}
                    </h2>

                </div>
                <div>
                    {sessions === 0 && (
    <p className="mt-6 text-center font-bold text-red-500">
        Your cart is empty
    </p>
)}

{sessions >= 1 && sessions <= 4 && (
    <p className="mt-6 text-center font-bold text-yellow-500">
        Items added to cart
    </p>
)}

{sessions >= 5 && (
    <p className="mt-6 text-center font-bold text-blue-500">
        Bulk Order 🎉
        </p>
)}</div>
                <br />

              
                <div className="flex justify-center gap-3 flex-1">
                    <Button onClick={addItems} className="bg-purple-500 hover:bg-purple-300 "> + Add items</Button>
                    <Button onClick={removeItems} className="bg-purple-500 hover:bg-purple-300 "> - Remove Items</Button>
                    <Button onClick={resetItems} className="bg-purple-500 hover:bg-purple-300 ">Reset</Button>


                </div>

                

            

                
            </CardContent>

           


           </Card>
           </ div>

    )
}
export default QualityTracker;