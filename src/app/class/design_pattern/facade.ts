class Ink {
     CheckInk() {
            return "+ Check ink done:";
        }
};

class Paper {
         CheckPaper() {
            return "+ Check paper" ;
        }
         GetPaperForPrinting() {
            return "+ Get paper for printing" ;
        }
};

class PrinterEngine {
         LoadDocument() {
            return "+ Load document from computer" ;
        }
         FormatDocumentData() {
            return "+ Format data" ;
        }
         WarmUp() {
            return "+ Engine was warm up" ;
        }
         PrepareLaser() {
            return "+ Prepare laser" ;
        }
         InkToPaper() {
            return "+ Ink to paper" ;
        }
};

/* Facade */
export class PrinterController {
         Print() {
            let ink = new Ink();
            let paper = new Paper;
            let engine =new PrinterEngine() ;

            return ink.CheckInk() +
            paper.CheckPaper() +
            engine.LoadDocument() +
            engine.FormatDocumentData() +
            paper.GetPaperForPrinting() +
            engine.PrepareLaser() +
            engine.WarmUp() +
            engine.InkToPaper();
        }
};
