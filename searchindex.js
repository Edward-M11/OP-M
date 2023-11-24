Search.setIndex({"docnames": ["Untitled11", "conclu", "intro", "introduc", "metodo", "op2", "proyecto_optimizacion_svm", "punto3"], "filenames": ["Untitled11.ipynb", "conclu.ipynb", "intro.md", "introduc.ipynb", "metodo.ipynb", "op2.ipynb", "proyecto_optimizacion_svm.ipynb", "punto3.ipynb"], "titles": ["Algoritmo del M\u00e9todo de Puntos Interiores", "Conclusiones", "Informe Proyecto Final Optimizacion Matematica", "Introducci\u00f3n", "Objetivo", "2", "<strong>Proyecto Final Optimizaci\u00f3n: SVM</strong>", "<strong>Caso no separable general</strong>"], "terms": {"from": [0, 4, 5, 6, 7], "sklearn": [0, 4, 5, 6, 7], "import": [0, 4, 5, 6, 7], "dataset": [0, 5, 6, 7], "numpi": [0, 4, 5, 6, 7], "np": [0, 4, 5, 6, 7], "cargamo": [0, 5], "el": [0, 1, 3, 4, 6, 7], "conjunto": [0, 1, 3, 4, 5, 7], "dato": [0, 1, 2, 3, 5, 7], "iri": [0, 3, 5, 6, 7], "load_iri": [0, 5, 6, 7], "x": [0, 4, 5, 6, 7], "data": [0, 1, 5, 6, 7], "y": [0, 1, 2, 3, 7], "target": [0, 5, 6, 7], "seleccionamo": 0, "solo": [0, 5, 7], "clase": [0, 4, 5, 6, 7], "setosa": [0, 5, 7], "0": [0, 4, 5, 6, 7], "e": [0, 5, 6, 7], "virginica": [0, 5, 6, 7], "reemplazamo": 0, "por": [0, 4, 5, 6, 7], "para": [0, 1, 3, 5, 6, 7], "ajustars": [0, 5], "al": [0, 1, 3, 4, 6, 7], "problema": [0, 1, 2, 3], "svm": [0, 1, 2, 3, 4], "indic": [0, 6], "where": [0, 5, 7], "hemo": [0, 1], "cargado": 0, "con": [0, 1, 3, 4, 6, 7], "\u00e9xito": 0, "seleccionado": 0, "caracter\u00edstica": [0, 5], "tienen": 0, "dimension": [0, 5], "100": [0, 5, 6], "lo": [0, 1, 3, 4, 5, 7], "que": [0, 3, 4, 6, 7], "significa": [0, 4, 5], "hai": [0, 4, 5, 6, 7], "muestra": [0, 5, 6], "cada": [0, 4, 5, 7], "una": [0, 1, 3, 4, 5, 7], "etiqueta": [0, 5, 6, 7], "son": [0, 5, 6, 7], "un": [0, 1, 3, 4, 6, 7], "vector": [0, 1, 3, 4, 5, 6], "elemento": [0, 5, 7], "ahora": [0, 5], "contienen": 0, "siguient": [0, 5, 6, 7], "es": [0, 4, 5, 6, 7], "construir": 0, "dual": [0, 2, 3], "ello": 0, "definiremo": 0, "funci\u00f3n": [0, 6, 7], "objetivo": [0, 2, 5, 6], "restriccion": [0, 1, 2, 5, 6], "luego": 0, "utilizaremo": 0, "kernel": [0, 1, 2, 3, 4, 5, 6], "radial": [0, 7], "resolveremo": 0, "optimizaci\u00f3n": [0, 2, 3, 7], "utilizando": [0, 4, 5, 7], "biblioteca": [0, 4, 5], "cvxopt": [0, 5, 7], "cuadr\u00e1tica": [0, 5, 7], "text": 0, "maximizar": [0, 5, 7], "quad": [0, 6], "_": [0, 6], "i": [0, 4, 5, 6, 7], "n": [0, 5, 6, 7], "alpha_i": [0, 5, 6], "frac": [0, 5, 6, 7], "j": [0, 5, 6, 7], "y_iy_j\u03b1_i\u03b1_jx_i": 0, "x_j": [0, 5], "sujeto": [0, 5, 6, 7], "leq": [0, 5, 7], "\u03b1_i": 0, "c": [0, 1, 4, 5, 6, 7], "\u03b1_iy_i": 0, "se": [0, 3, 4, 6, 7], "pued": [0, 4, 5, 6, 7], "escribir": 0, "en": [0, 1, 2, 3, 6, 7], "forma": [0, 5, 7], "matrici": 0, "como": [0, 1, 3, 4, 5, 6, 7], "minimizar": [0, 5, 6], "alpha": [0, 4, 5, 6, 7], "t": [0, 5, 6, 7], "p": [0, 5, 6, 7], "q": [0, 5, 7], "g": [0, 4, 5, 7], "h": [0, 5, 6, 7], "A": [0, 3, 5, 6, 7], "b": [0, 5, 6, 7], "dond": [0, 5, 6, 7], "\u03b1": 0, "multiplicador": [0, 5, 6, 7], "lagrang": [0, 5, 6, 7], "matriz": [0, 4, 5, 6, 7], "caso": [0, 2, 3], "producto": [0, 5], "toda": [0, 5, 7], "externo": 0, "decir": [0, 5, 7], "y_iy_jk_": 0, "ij": [0, 6], "columna": [0, 5], "todo": [0, 2, 5, 6], "igual": [0, 5, 6], "ya": [0, 5, 7], "buscamo": [0, 5], "suma": [0, 5], "negativo": [0, 5], "matric": [0, 5], "representan": [0, 3, 5, 7], "desigualdad": [0, 5, 6], "deben": 0, "estar": 0, "entr": [0, 4, 5, 6, 7], "valor": [0, 4, 5, 6, 7], "penalizacion": 0, "aqu\u00ed": [0, 5, 6, 7], "construy": 0, "manten": 0, "geq": [0, 5, 6, 7], "restricci\u00f3n": [0, 5, 7], "igualdad": [0, 5, 6], "asegura": [0, 5], "y_i\u03b1_i": 0, "matrix": [0, 4, 5, 7], "solver": [0, 5, 7], "definimo": 0, "rbf": [0, 4, 5, 7], "def": [0, 4, 5, 6, 7], "kernel_rbf": 0, "gamma": [0, 4, 5, 7], "return": [0, 4, 5, 6, 7], "exp": [0, 5, 7], "linalg": [0, 5, 7], "norm": [0, 5, 6, 7], "construimo": [0, 5], "k": [0, 5, 7], "zero": [0, 5, 6, 7], "len": [0, 5, 6, 7], "rang": [0, 4, 5, 6, 7], "configuramo": 0, "outer": [0, 5, 7], "ones": [0, 5, 6, 7], "vstack": [0, 5, 7], "ey": [0, 5, 7], "hstack": [0, 5, 7], "reshap": [0, 5, 7], "astyp": [0, 4], "doubl": [0, 6], "resolvemo": 0, "option": [0, 5, 6], "show_progress": [0, 5], "true": [0, 4, 5, 6, 7], "abstol": 0, "1e": [0, 5, 6, 7], "10": [0, 4, 5, 6], "reltol": 0, "feastol": 0, "medimo": 0, "tiempo": [0, 4], "ant": [0, 5], "comenzar": 0, "time": [0, 7], "start_tim": [0, 7], "solut": [0, 5, 7], "qp": [0, 5, 7], "total": [0, 5], "ejecuci\u00f3n": 0, "n\u00famero": [0, 1, 5, 6], "iteracion": 0, "execution_tim": 0, "num_iter": 0, "iter": 0, "mostramo": [0, 5], "extra": 0, "lambda": [0, 5, 7], "arrai": [0, 5, 7], "flatten": [0, 5, 7], "identifica": 0, "soport": [0, 1, 3, 4, 5, 6], "aquello": [0, 5], "insignificant": 0, "support_vectors_idx": 0, "support_vector": [0, 5, 7], "support_vector_label": 0, "support_vector_lambda": 0, "informaci\u00f3n": [0, 4, 7], "relevant": 0, "print": [0, 4, 5, 6, 7], "shape": [0, 5, 6, 7], "pcost": 0, "dcost": 0, "gap": 0, "pre": 0, "dre": 0, "2253e": 0, "00": [0, 6], "1560e": 0, "02": [0, 5, 6, 7], "4e": 0, "6e": 0, "16": [0, 4, 7], "7": [0, 4, 5, 6, 7], "6781e": 0, "01": [0, 5, 6, 7], "0758e": 0, "5e": 0, "7e": 0, "8193e": 0, "5004e": 0, "3e": 0, "8e": 0, "2581e": 0, "1365e": 0, "9e": 0, "2e": 0, "3838e": 0, "6883e": 0, "4701e": 0, "5619e": 0, "6": [0, 4, 5, 6, 7], "4967e": 0, "5011e": 0, "03": 0, "4986e": 0, "4987e": 0, "04": [0, 6], "8": [0, 4, 5, 6, 7], "06": [0, 6], "9": [0, 4, 5, 6], "07": [0, 6], "09": [0, 6], "11": [0, 4, 6], "optim": [0, 6, 7], "found": 0, "14": [0, 4], "esto": [0, 1, 4, 5, 6, 7], "cost": [0, 5], "primal": [0, 3, 7], "respectivament": 0, "iteraci\u00f3n": [0, 7], "refier": [0, 4], "espacio": [0, 4, 5, 6], "origin": [0, 5], "variabl": [0, 5, 7], "mientra": 0, "principio": 0, "mui": [0, 4, 5, 6], "diferent": [0, 1, 3, 5], "indica": [0, 4, 7], "a\u00fan": [0, 5], "\u00f3ptima": [0, 5, 7], "esta": [0, 1, 3, 4, 5, 7], "diferencia": [0, 7], "medida": [0, 4, 6, 7], "progresa": 0, "est": [0, 1, 3, 4, 5, 6, 7], "debe": 0, "disminuir": 0, "indicando": 0, "est\u00e1n": [0, 5, 7], "acercando": 0, "convergencia": 0, "cuando": [0, 4, 5, 6, 7], "peque\u00f1o": [0, 3, 5], "estamo": 0, "cerca": 0, "presi\u00f3n": [0, 4], "o": [0, 4, 7], "residu": 0, "cu\u00e1n": 0, "bien": [0, 3, 5], "cumpliendo": 0, "peque\u00f1a": 0, "satisfaciendo": 0, "similar": [0, 7], "pero": [0, 3, 7], "tambi\u00e9n": [0, 5], "satisfacci\u00f3n": 0, "selecciona": [0, 5], "inici": [0, 7], "x_0": 0, "factibl": [0, 7], "establec": 0, "\u03bc": 0, "resuelv": [0, 5], "cuadr\u00e1tico": [0, 6], "begin": [0, 6], "align": [0, 7], "f_0": 0, "mathbf": [0, 5], "mu_k": 0, "sum_": [0, 5], "m": [0, 5, 7], "log": 0, "f_i": 0, "end": [0, 5, 6], "\u03bc_k": 0, "actual": [0, 4, 7], "t\u00edpicament": 0, "mediant": [0, 1, 4], "newton": 0, "reduc": 0, "seg\u00fan": [0, 7], "estrategia": 0, "predefinida": 0, "mu_": 0, "rho": 0, "verifica": 0, "bas\u00e1ndos": 0, "criterio": 0, "norma": 0, "gradient": 0, "modificada": 0, "proximidad": 0, "karush": [0, 5], "kuhn": [0, 5], "tucker": [0, 5], "kkt": [0, 5, 7], "converg": [0, 7], "aproximaci\u00f3n": 0, "proyecto": [1, 3], "ha": [1, 7], "representado": 1, "inmersi\u00f3n": 1, "profunda": 1, "fascinant": 1, "mundo": 1, "de": [1, 2, 3], "la": [1, 2, 3, 6, 7], "m\u00e1quina": [1, 3, 4, 5, 6, 7], "revelando": 1, "versatilidad": 1, "eficacia": [1, 3], "t\u00e9cnica": [1, 3, 7], "resoluci\u00f3n": 1, "clasificaci\u00f3n": [1, 2, 3, 5, 7], "abordar": 1, "tanto": [1, 3], "separ": [1, 2, 3], "diversa": 1, "formulacion": 1, "m\u00e9todo": [1, 2, 3, 5], "explorado": 1, "exhaustivament": 1, "capacidad": [1, 5], "proporcionando": 1, "comprensi\u00f3n": 1, "detallada": 1, "su": [1, 3, 4, 5, 6, 7], "comportamiento": 1, "diverso": [1, 3], "escenario": 1, "combinaci\u00f3n": 1, "enfoqu": [1, 3], "convencional": 1, "avanzado": [1, 3], "enriquecido": 1, "nuestra": 1, "sentando": 1, "as\u00ed": [1, 3], "base": [1, 3, 5, 7], "futura": 1, "exploracion": 1, "emocionant": 1, "campo": [1, 4], "investigaci\u00f3n": 1, "resultado": [1, 5, 6, 7], "obtenido": [1, 5, 6, 7], "seccion": [1, 3], "destacan": 1, "sensibilidad": [1, 5], "par\u00e1metro": [1, 4, 5, 6, 7], "clave": 1, "elecci\u00f3n": [1, 3, 5, 7], "del": [1, 2, 3, 4, 6], "variaci\u00f3n": 1, "precisi\u00f3n": 1, "resalta": 1, "importancia": [1, 7], "calibraci\u00f3n": 1, "adecuada": 1, "lograr": [1, 3], "rendimiento": [1, 3, 4, 7], "\u00f3ptimo": [1, 3, 5, 6], "consideraci\u00f3n": 1, "dimensionalidad": 1, "asimismo": 1, "implementaci\u00f3n": [1, 3], "activa": [1, 2], "punto": [1, 2, 7], "interior": [1, 2, 6], "proporcionado": 1, "perspectiva": 1, "adicional": [1, 7], "sobr": [1, 7], "ofreciendo": [1, 3], "alternativa": 1, "eficac": 1, "eficient": 1, "comparaci\u00f3n": 1, "m\u00e1": [1, 4, 5, 6, 7], "approxim": 1, "scikit": [1, 4], "learn": [1, 4], "cross": [1, 4], "valid": [1, 4], "evalu": 1, "estim": [1, 4], "perform": 1, "b\u00fasqueda": [1, 4], "hiperpar\u00e1metro": [1, 4, 5], "The": [1, 5], "machin": [1, 6], "learner": 1, "trick": [1, 2], "toward": 1, "scienc": 1, "vectori": [1, 4, 5, 7], "github": 1, "edward": [2, 5], "moral": [2, 5], "mariana": 2, "casta\u00f1eda": 2, "shadia": [2, 6], "jaffar": 2, "sara": 2, "niebl": 2, "kevin": 2, "jaim": 2, "aqui": [2, 5], "ta": 2, "introducci\u00f3n": 2, "desarrollo": 2, "2": [2, 4, 6, 7], "gener": [2, 5], "conclusion": [2, 5], "algoritmo": [2, 3, 6], "librer\u00eda": 2, "utilizada": [2, 7], "binaria": [2, 6], "p\u00falsare": 2, "presencia": [2, 3], "ausencia": 2, "reptil": [2, 3], "cerrej\u00f3n": [2, 3], "svc": [2, 5, 7], "referencia": [2, 4], "poderoso": [3, 5], "supervisado": [3, 6], "destaca": 3, "especialment": [3, 5], "complejo": [3, 5], "si": [3, 5, 6, 7], "pueden": [3, 5], "aplicars": 3, "tarea": 3, "regresi\u00f3n": [3, 6], "generalment": 3, "observa": [3, 6], "alcanzaron": 3, "gran": [3, 4], "notoriedad": 3, "d\u00e9cada": 3, "1990": 3, "contin\u00faan": 3, "siendo": [3, 5], "preferida": 3, "alto": [3, 5, 7], "ajust": [3, 4], "m\u00ednimo": 3, "present": 3, "sumerg": 3, "espec\u00edficament": 3, "poderosa": 3, "\u00e1mbito": 3, "matem\u00e1tica": 3, "aprendizaj": [3, 6], "autom\u00e1tico": 3, "centr\u00e1ndos": 3, "dirig": 3, "an\u00e1lisi": 3, "flor": [3, 5, 7], "cl\u00e1sico": 3, "patron": 3, "otro": [3, 5, 6], "relacionado": 3, "colombia": [3, 4], "estrella": [3, 4, 5], "pulsar": 3, "largo": 3, "cinco": 3, "asignada": [3, 7], "miembro": 3, "equipo": 3, "exploraremo": 3, "aspecto": 3, "desd": 3, "formulaci\u00f3n": [3, 7], "hasta": [3, 7], "validaci\u00f3n": [3, 4], "cruzada": [3, 4], "hiperparametrizaci\u00f3n": 3, "modelo": [3, 4, 7], "nos": [3, 5], "permitir\u00e1": 3, "comparar": 3, "distinta": 3, "implementacion": 3, "tipo": [3, 5], "evaluaci\u00f3n": [3, 5], "integr": 3, "contexto": [3, 5, 7], "c\u00f3digo": [4, 5, 6], "implementar": [4, 6], "clasificador": [4, 7], "python": [4, 5, 6], "ajusta": 4, "entrada": [4, 5], "optimiza": 4, "cuadr\u00edcula": 4, "posteriorment": [4, 6], "eval\u00faa": [4, 7], "construcci\u00f3n": [4, 5], "roc": 4, "visualizaci\u00f3n": 4, "confusi\u00f3n": [4, 5], "panda": [4, 5, 6], "pd": [4, 5, 6], "decomposit": 4, "pca": 4, "preprocess": [4, 5, 7], "standardscal": [4, 5, 7], "model_select": [4, 5, 6, 7], "gridsearchcv": 4, "train_test_split": [4, 5, 6, 7], "stratifiedkfold": 4, "metric": [4, 5, 7], "accuracy_scor": [4, 5, 7], "matplotlib": [4, 5, 6, 7], "pyplot": [4, 5, 6, 7], "plt": [4, 5, 6, 7], "seaborn": [4, 5], "sn": [4, 5], "roc_auc_scor": 4, "roc_curv": 4, "auc": 4, "confusion_matrix": [4, 5], "learning_curv": 4, "p\u00falsar": 4, "neutron": 4, "emit": 4, "haz": 4, "radiaci\u00f3n": 4, "barr": 4, "faro": 4, "forman": [4, 5], "masiva": 4, "colapsa": 4, "final": 4, "vida": 4, "dejando": 4, "atr\u00e1": 4, "remanent": 4, "diminuto": 4, "denso": 4, "gira": 4, "r\u00e1pidament": 4, "magn\u00e9tico": 4, "acelera": 4, "part\u00edcula": 4, "velocidad": 4, "cercana": [4, 7], "luz": 4, "emiten": 4, "enfoca": 4, "fuert": 4, "mean_integr": 4, "mean": [4, 5, 7], "observ": [4, 5], "sd": 4, "standard": 4, "deviat": 4, "ek": 4, "excess": 4, "kurtosi": 4, "skew": 4, "In": [4, 6, 7], "probabl": [4, 7], "theori": 4, "statist": 4, "measur": 4, "asymmetri": 4, "distribut": 4, "real": [4, 5], "valu": [4, 5, 6, 7], "random": 4, "about": 4, "its": 4, "mean_dmsnr_curv": 4, "dm": 4, "snr": 4, "curv": 4, "sd_dmsnr_curv": 4, "ek_dmsnr_curv": 4, "skewness_dmsnr_curv": 4, "class": [4, 5], "Not": 4, "1": [4, 6, 7], "read_csv": 4, "trainx": 4, "csv": 4, "iloc": [4, 5], "scaler": [4, 5], "x_scale": 4, "fit_transform": [4, 5, 7], "entrenamiento": [4, 5, 7], "prueba": [4, 5, 7], "x_train": [4, 5, 6, 7], "x_test": [4, 5, 6, 7], "y_train": [4, 5, 6, 7], "y_test": [4, 5, 6, 7], "test_siz": [4, 6, 7], "random_st": [4, 6, 7], "42": [4, 6, 7], "param_grid": 4, "linear": [4, 5], "poli": 4, "scale": 4, "auto": 4, "svm_classifi": 4, "estratificada": 4, "fold": 4, "cv": 4, "n_split": 4, "shuffl": 4, "grid_search": 4, "score": [4, 5], "roc_auc": 4, "fit": [4, 5], "almacenar": 4, "ls": 4, "metrica": 4, "validacion": 4, "cv_results_": 4, "mean_test_scor": 4, "std": [4, 5], "std_test_scor": 4, "param": 4, "results_list": 4, "stdev": 4, "zip": [4, 5, 6], "result_dict": 4, "meanrocauc": 4, "paramet": 4, "append": 4, "datafram": [4, 5], "best_param": 4, "best_params_": 4, "obten": [4, 5, 6], "mejor": [4, 5], "best_svm": 4, "best_estimator_": 4, "y_pred_proba": 4, "predict_proba": 4, "probabilidad": 4, "positiva": 4, "calcular": [4, 5, 7], "m\u00e9trica": [4, 5], "y_pred": [4, 5, 6], "predict": [4, 5], "conf_matrix": 4, "figur": [4, 5], "figsiz": [4, 5], "heatmap": [4, 5], "annot": [4, 5], "fmt": [4, 5], "d": [4, 5, 7], "cmap": [4, 5, 7], "blue": [4, 5], "linewidth": 4, "5": [4, 5, 6, 7], "cbar_kw": 4, "shrink": 4, "xlabel": [4, 5, 7], "prediccion": [4, 5], "ylabel": [4, 5, 7], "titl": [4, 5, 7], "show": [4, 5, 7], "994080": 4, "001543": 4, "992847": 4, "001675": 4, "989598": 4, "001740": 4, "3": [4, 6, 7], "4": [4, 5, 6, 7], "992849": 4, "001676": 4, "989594": 4, "994061": 4, "992998": 4, "001788": 4, "990837": 4, "002314": 4, "993002": 4, "001790": 4, "990838": 4, "002315": 4, "12": [4, 5], "994003": 4, "001583": 4, "13": 4, "992482": 4, "001932": 4, "991703": 4, "002446": 4, "15": [4, 5], "992494": 4, "17": 4, "002451": 4, "num_support_vectors1": 4, "n_support_": 4, "875": 4, "873": 4, "train_siz": 4, "train_scor": 4, "test_scor": 4, "linspac": [4, 5], "media": 4, "desviacion": 4, "est\u00e1ndar": 4, "puntuacion": 4, "train_mean": 4, "axi": [4, 5, 7], "train_std": 4, "test_mean": 4, "test_std": 4, "graficar": [4, 5], "plot": 4, "color": [4, 5], "marker": [4, 5, 7], "markers": 4, "label": [4, 5], "puntuaci\u00f3n": 4, "fill_between": 4, "green": 4, "linestyl": 4, "s": [4, 6, 7], "tama\u00f1o": [4, 5, 7], "legend": [4, 5], "loc": [4, 5], "lower": 4, "right": 4, "grid": 4, "proporciona": [4, 5, 7], "optimizado": 4, "encontrado": [4, 7], "\u00e1rea": 4, "bajo": [4, 7], "9944205317570285": 4, "primera": 4, "segunda": 4, "461": 4, "tu": [4, 5], "entrenado": 4, "note": 4, "buena": [4, 7], "relaci\u00f3n": 4, "sesgo": [4, 5, 6, 7], "varianza": 4, "durant": [4, 7], "entrenaminto": 4, "logrando": 4, "buen": 4, "zona": 4, "guajira": 4, "diversidad": 4, "biol\u00f3gica": 4, "incluyendo": [4, 5, 7], "variedad": 4, "han": 4, "registrado": 4, "60": 4, "especi": [4, 6], "serpient": 4, "lagarto": 4, "tortuga": 4, "caiman": 4, "t_max": 4, "representa": [4, 5], "temperatura": 4, "m\u00e1xima": 4, "registrada": 4, "per\u00edodo": 4, "espec\u00edfico": [4, 7], "d\u00eda": 4, "solar": 4, "radiat": 4, "hace": 4, "ubicaci\u00f3n": 4, "espec\u00edfica": 4, "indicar": 4, "cantidad": [4, 7], "energ\u00eda": 4, "recibida": 4, "speed": 4, "wind": 4, "viento": 4, "dada": [4, 7], "medirs": 4, "unidad": 4, "metro": 4, "segundo": [4, 7], "kil\u00f3metro": 4, "hora": 4, "t_min": 4, "m\u00ednima": 4, "vapr": 4, "vapor": 4, "ejercida": 4, "agua": 4, "air": 4, "indicador": 4, "humedad": 4, "prec": 4, "precipitaci\u00f3n": 4, "lluvia": 4, "niev": 4, "periodo": 4, "considerado": 4, "tavg": 4, "promedio": [4, 5], "a\u00f1o": 4, "correspond": [4, 5], "month": 4, "me": [4, 5], "speci": [4, 5, 6], "gonatodes_vittatu": 4, "escalar": 4, "tengan": 4, "cero": [4, 5], "unitaria": 4, "model": 4, "hiperparametro": [4, 5], "crea": [4, 5], "best_model": 4, "set_param": 4, "realiza": [4, 7], "y_prob": 4, "int": 4, "calcula": [4, 5, 7], "fper": 4, "tper": 4, "threshold": 4, "confuci\u00f3n": 4, "cm": [4, 5, 7], "xticklabel": 4, "yticklabel": 4, "confus": 4, "9138293085345732": 4, "739476": 4, "052987": 4, "766732": 4, "046945": 4, "739541": 4, "041027": 4, "767309": 4, "048829": 4, "740746": 4, "045044": 4, "747610": 4, "052901": 4, "859926": 4, "036235": 4, "793590": 4, "035201": 4, "862245": 4, "036405": 4, "795242": 4, "034751": 4, "746215": 4, "053450": 4, "924051": 4, "022341": 4, "844624": 4, "032669": 4, "924008": 4, "022431": 4, "844108": 4, "033124": 4, "num_support_vector": [4, 7], "224": 4, "237": 4, "plot_learning_curv": 4, "ylim": 4, "none": [4, 7], "n_job": 4, "train": [4, 5], "exampl": [4, 7], "puntaj": [4, 5], "train_scores_mean": 4, "train_scores_std": 4, "test_scores_mean": 4, "test_scores_std": 4, "grafica": 4, "r": 4, "best": 4, "visualiza": 4, "40": [4, 6], "inicio": 4, "alta": 4, "sin": [4, 5, 6, 7], "embargo": [4, 6], "logra": [4, 5], "usando": [5, 6, 7], "visto": [5, 7], "escriba": 5, "\u03c6": 5, "quadprog": [5, 6], "matlab": [5, 6], "equivalent": [5, 6], "cualquier": [5, 7], "lenguaj": [5, 6], "escogencia": 5, "generalizaci\u00f3n": 5, "autor\u00eda": 5, "resuelva": 5, "http": [5, 7], "wikipedia": [5, 7], "org": [5, 7], "wiki": [5, 7], "conjunto_de_datos_flor_iri": [5, 7], "clasificar": [5, 6, 7], "planta": [5, 7], "virg\u00ednica": [5, 7], "us": 5, "vario": 5, "determin": [5, 7], "error": [5, 7], "obtenga": 5, "empezar": 5, "desarrollar": 5, "iten": 5, "part": 5, "entenderemo": 5, "separbl": 5, "entiend": 5, "seprabl": 5, "exist": 5, "lineal": [5, 6, 7], "pueda": 5, "correctament": [5, 7], "alguno": 5, "ocurrir": 5, "existen": 5, "tre": [5, 6, 7], "mal": 5, "clasificado": 5, "y_n": [5, 6], "f": [5, 6], "_n": 5, "decisi\u00f3n": [5, 7], "potencialment": 5, "No": [5, 7], "cometen": [5, 7], "xi_n": [5, 7], "requieren": 5, "ninguna": 5, "ser": [5, 6, 7], "mide": 5, "grado": 5, "violaci\u00f3n": 5, "correspondient": [5, 6], "fundamental": 5, "permiten": [5, 7], "toler": [5, 7], "cierta": [5, 7], "violacion": 5, "regulada": 5, "penalizaci\u00f3n": [5, 6, 7], "minimizaci\u00f3n": 5, "incorrecto": [5, 7], "hiperplano": [5, 6, 7], "indican": [5, 7], "consider": 5, "sino": 5, "completament": 5, "l\u00ednea": 5, "s\u00f3lida": 5, "discontinua": 5, "s\u00edmbolo": 5, "l\u00edmite": [5, 7], "c\u00edrculo": 5, "cometiendo": 5, "u": [5, 7], "simplement": 5, "ponderada": 5, "consideremo": 5, "queremo": 5, "g_i": 5, "var\u00eda": [5, 6], "incorporar": 5, "introducimo": 5, "lambda_i": [5, 7], "lagrangiana": 5, "mathcal": 5, "l": [5, 7], "utiliza": [5, 7], "transformar": 5, "encontrar": [5, 6, 7], "separaci\u00f3n": [5, 6, 7], "m\u00e1ximo": 5, "uno": [5, 7], "resuelto": [5, 7], "eficientement": 5, "est\u00e9n": 5, "meno": [5, 6], "distancia": [5, 7], "incorporan": 5, "aplican": 5, "soluci\u00f3n": [5, 6, 7], "maximiza": [5, 7], "uso": [5, 6], "v\u00e1lido": [5, 7], "porqu": 5, "permit": 5, "convertir": [5, 6, 7], "complicada": 5, "manej": 5, "empotrada": 5, "facilita": 5, "solucion": 5, "aplicar": 5, "seguimo": 5, "paso": [5, 6], "combinamo": 5, "derivamo": 5, "respecto": [5, 7], "derivada": 5, "anulan": 5, "da": [5, 7], "sistema": 5, "ecuacion": 5, "resolv": [5, 6, 7], "verificar": 5, "necesitamo": 5, "incluyen": 5, "factibilidad": [5, 7], "condici\u00f3n": 5, "slack": 5, "interpretaci\u00f3n": 5, "cambio": [5, 6, 7], "marginal": 5, "do": [5, 6, 7], "sujeta": [5, 7], "clasificada": 5, "xi": [5, 6, 7], "permitir": 5, "clasificacion": [5, 6], "err\u00f3nea": 5, "transformaci\u00f3n": 5, "mapear": 5, "sean": 5, "linealment": [5, 6], "w": [5, 6, 7], "mu": [5, 7], "xi_i": [5, 6], "y_i": [5, 6], "x_i": [5, 6], "mu_i": 5, "peso": [5, 6], "t\u00e9rmino": [5, 6, 7], "truco": 5, "c\u00e1lculo": [5, 7], "interno": 5, "superior": 5, "necesidad": 5, "expl\u00edcitament": 5, "cdot": [5, 6, 7], "tomamo": 5, "parcial": 5, "igualamo": 5, "nabla_w": 5, "partial": 5, "implica": [5, 7], "implican": 5, "entonc": 5, "viceversa": 5, "aseguran": 5, "sustituir": 5, "relacion": 5, "obtenida": 5, "utilizar": [5, 7], "podemo": [5, 6], "reformular": 5, "maximizaci\u00f3n": 5, "alpha_j": 5, "y_j": 5, "vez": [5, 7], "utilizan": 5, "mayor": [5, 6, 7], "corresponden": 5, "\u00fanico": 5, "afectan": 5, "posici\u00f3n": 5, "menudo": 5, "f\u00e1cil": 5, "\u00fatil": 5, "aplica": 5, "transformado": 5, "sustituci\u00f3n": 5, "operar": 5, "dimensi\u00f3n": 5, "comun": 5, "polin\u00f3mico": 5, "gaussiano": [5, 7], "crucial": [5, 7], "plotli": 5, "express": 5, "px": 5, "convertimo": 5, "df": 5, "column": 5, "feature_nam": 5, "categor": [5, 6], "from_cod": 5, "target_nam": 5, "creamo": 5, "gr\u00e1fico": 5, "3d": 5, "interactivo": 5, "fig": 5, "scatter_3d": 5, "sepal": 5, "length": [5, 6], "width": 5, "z": [5, 7], "petal": 5, "mostrar": 5, "user": 5, "miniconda3": 5, "env": 5, "ml_venv": 5, "lib": 5, "site": 5, "packag": 5, "_core": 5, "py": 5, "2044": 5, "futurewarn": 5, "default": 5, "fals": [5, 6, 7], "deprec": 5, "chang": 5, "futur": 5, "version": 5, "pass": 5, "retain": 5, "current": 5, "behavior": 5, "adopt": 5, "silenc": 5, "thi": 5, "warn": 5, "group": 5, "groupbi": 5, "required_group": 5, "sort": 5, "skip": 5, "one_group": 5, "grouper": 5, "filtro": 5, "necesito": 5, "ejercicio": [5, 6], "borramo": 5, "fila": 5, "renombro": 5, "column_nam": 5, "tolist": 5, "nombr": 5, "quito": 5, "versicolor": 5, "iris_df_filt": 5, "cat": 5, "categori": 5, "remove_categori": 5, "defino": 5, "drop": 5, "vemo": 5, "caracteristica": 5, "describ": 5, "value_count": 5, "count": 5, "000000": 5, "262000": 5, "872000": 5, "906000": 5, "676000": 5, "662834": 5, "332751": 5, "825578": 5, "424769": 5, "min": [5, 6, 7], "900000": 5, "25": 5, "800000": 5, "700000": 5, "375000": 5, "300000": 5, "50": [5, 7], "600000": 5, "75": 5, "025000": 5, "525000": 5, "max": [5, 7], "500000": 5, "uniqu": 5, "top": 5, "freq": 5, "name": [5, 6], "dtype": 5, "object": [5, 6], "int64": 5, "appdata": 5, "local": 5, "temp": 5, "ipykernel_105532": 5, "1321155144": 5, "settingwithcopywarn": 5, "try": 5, "set": 5, "copi": [5, 7], "slice": 5, "row_index": 5, "col_index": 5, "instead": 5, "see": 5, "caveat": 5, "document": 5, "pydata": 5, "doc": 5, "stabl": 5, "user_guid": 5, "index": 5, "html": 5, "view": 5, "versu": 5, "corr": 5, "2f": 5, "ax": 5, "confucion": 5, "correlacion": 5, "aplicamo": 5, "nuevament": 5, "vif": 5, "statsmodel": 5, "stat": 5, "outliers_influ": 5, "variance_inflation_factor": 5, "tool": 5, "add_const": 5, "df_with_const": 5, "predictora": 5, "vif_data": 5, "const": 5, "125": 5, "170277": 5, "990113": 5, "721954": 5, "252447": 5, "948354": 5, "eliminar": 5, "tien": [5, 6, 7], "hacer": 5, "quedamo": 5, "important": 5, "vix": 5, "122": 5, "240203": 5, "730834": 5, "649553": 5, "766067": 5, "cercano": [5, 6], "perfecto": 5, "represneta": 5, "multicolinealidad": 5, "rango": 5, "Nos": 5, "quendamo": 5, "quedo": 5, "svaribl": 5, "explicativa": [5, 6], "iris_df": 5, "frame": 5, "pairplot": 5, "hue": 5, "ve": 5, "estan": 5, "mucho": [5, 6], "junto": [5, 7], "realment": 5, "dificil": 5, "separalo": 5, "lienalment": 5, "filterwarn": 5, "ignor": 5, "make_blob": 5, "mglearn": 5, "linearsvc": 5, "head": 5, "51": 5, "52": 5, "53": 5, "54": 5, "symbol": 5, "aun": 5, "graficando": 5, "ven": 5, "pegado": 5, "labelencod": [5, 7], "graph_obj": 5, "go": 5, "codificamo": 5, "encod": 5, "y_encod": 5, "entrenamo": 5, "clf": 5, "coeficient": [5, 6], "coef_": 5, "v": 5, "intercept_": 5, "malla": 5, "xx": [5, 7], "yy": [5, 7], "meshgrid": [5, 7], "zz": 5, "a\u00f1adimo": 5, "add_trac": 5, "surfac": 5, "hyperplan": [5, 7], "opac": 5, "showscal": 5, "ver": 5, "dado": [5, 7], "comot": 5, "sampl": 5, "reset_index": 5, "separa": 5, "aleatoria": 5, "versicolor_test": 5, "virginica_test": 5, "concatena": 5, "test_df": 5, "concat": 5, "elimina": 5, "train_df": 5, "nconjunto": 5, "separado": 5, "94": 5, "96": 5, "97": 5, "98": 5, "99": 5, "90": 5, "row": 5, "63": 5, "68": 5, "95": 5, "26": 5, "61": 5, "separo": 5, "testeo": 5, "escalarlo": 5, "min_on_train": 5, "range_on_train": 5, "x_train_scal": 5, "minimum": 5, "each": 5, "featur": [5, 7], "format": 5, "maximum": [5, 7], "float64": 5, "x_test_scal": 5, "accuraci": 5, "3f": 5, "test": 5, "944": 5, "000": 5, "parametro": 5, "defecto": 5, "svc_c01": 5, "001": [5, 6], "933": 5, "provando": 5, "empeora": 5, "veremo": 5, "grafico": 5, "mostratan": 5, "desea": 5, "usar": 5, "map": 5, "codifica": 5, "num\u00e9rico": 5, "escala": [5, 7], "probar": 5, "logar\u00edtmica": 5, "c_valu": 5, "gamma_valu": 5, "crear": 5, "subplot": 5, "enumer": 5, "entrena": 5, "dibujar": 5, "x_min": [5, 7], "x_max": [5, 7], "y_min": [5, 7], "y_max": [5, 7], "arang": [5, 7], "predic": 5, "redimensiona": 5, "c_": [5, 7], "ravel": [5, 7], "dibuja": 5, "contourf": [5, 7], "coolwarm": 5, "scatter": [5, 7], "edgecolor": [5, 7], "set_titl": 5, "tight_layout": 5, "entreno": 5, "asi": 5, "poder": 5, "cambia": 5, "funcionamiento": 5, "entrnado": 5, "obtien": 5, "diferest": 5, "devemo": 5, "escog": 5, "tenga": 5, "predecir": 5, "y_test_encod": 5, "train_svm": 5, "obtienen": 5, "n_sampl": [5, 7], "n_featur": [5, 7], "par": 5, "dot": [5, 6, 7], "crean": 5, "deshabilita": 5, "salida": 5, "progreso": 5, "solucionador": [5, 7], "programaci\u00f3n": [5, 6, 7], "extraen": 5, "identifican": [5, 7], "ind": 5, "sv": 5, "sv_y": 5, "y_k": 5, "sum": [5, 6, 7], "ind_k": 5, "devuelv": 5, "predicci\u00f3n": [5, 7], "nuevo": [5, 7], "svm_predict": 5, "sign": [5, 6], "1000": [5, 6, 7], "y_test_predict": 5, "recall_scor": 5, "precision_scor": 5, "f1_score": 5, "calculamo": 5, "conf_mat": 5, "fp": 5, "diag": 5, "fn": 5, "tp": 5, "tn": 5, "precis": 5, "recal": 5, "f1": 5, "visualizamo": 5, "mapa": 5, "calor": 5, "verdadero": 5, "predicho": 5, "viridi": 5, "888888888888889": 5, "preparaci\u00f3n": [5, 7], "conocido": [5, 7], "efectivament": [5, 7], "transforma": 5, "separada": 5, "incluso": 5, "contien": [5, 6], "esenci": 5, "asegurando": 5, "constant": 5, "regularizaci\u00f3n": 5, "controla": [5, 7], "trade": 5, "off": 5, "respectivo": [5, 6], "sea": [5, 7], "extracci\u00f3n": 5, "umbral": 5, "consideran": 5, "influir\u00e1n": 5, "bias": 5, "bueno": 5, "sigu": 5, "comnetiendo": 5, "train_svm_poli": 5, "degre": 5, "coef0": 5, "k_poli": 5, "svm_predict_poli": 5, "k_poly_pr": 5, "9666666666666667": 5, "9333333333333333": 5, "9655172413793104": 5, "especificado": 5, "independient": 5, "representar": 5, "interaccion": 5, "polinomico": 5, "clasifica": 5, "teniendo": 5, "posibl": 5, "mejora": [5, 6], "train_svm_rbf": 5, "k_rbf": 5, "diff": 5, "to_numpi": 5, "svm_predict_rbf": 5, "asarrai": [5, 7], "k_rbf_pred": 5, "resultant": 5, "sim\u00e9trica": 5, "similitud": 5, "calculada": 5, "representaci\u00f3n": 5, "usamo": 5, "cual": [5, 6, 7], "grand": [5, 6], "termina": 5, "causando": 5, "repitiendo": 5, "proceso": [5, 6, 7], "valo": 5, "clasificadorrr": 5, "hicieorn": 5, "perfecta": 5, "aunqu": [5, 7], "probemo": 5, "kerner": 5, "indeoendiemntement": 5, "cometer\u00e1": 5, "desempe\u00f1o": 5, "bastant": 5, "escogiendo": 5, "correcta": 5, "jaafar": 6, "support": [6, 7], "usado": 6, "maximic": 6, "margen": [6, 7], "trabajo": 6, "abordar\u00e1n": 6, "datset": 6, "longitud": 6, "ancho": [6, 7], "p\u00e9talo": 6, "s\u00e9palo": 6, "flore": 6, "adem\u00e1": 6, "analizar": 6, "primer": 6, "lugar": 6, "resolver\u00e1n": 6, "repetir\u00e1n": 6, "usaremo": 6, "problem": 6, "cvxpy": 6, "utilizaron": 6, "realizaci\u00f3n": 6, "fueron": 6, "cp": 6, "scipi": 6, "minim": 6, "linearconstraint": 6, "io": 6, "modulenotfounderror": 6, "traceback": [6, 7], "most": [6, 7], "recent": [6, 7], "call": [6, 7], "last": [6, 7], "cell": [6, 7], "line": [6, 7], "modul": 6, "respuesta": 6, "iniciemo": 6, "escribiendo": 6, "funcion": 6, "min_": 6, "tx_i": 6, "foral": 6, "hat": 6, "p_": 6, "y_iy_jx_i": 6, "tx_j": 6, "equat": 6, "pmatrix": 6, "vdot": 6, "y_1": 6, "y_2": 6, "filtrar": 6, "x_subset": 6, "y_subset": 6, "cambiar": [6, 7], "constraint": 6, "solv": 6, "w_optim": 6, "b_optim": 6, "intercepto": 6, "04603438": 6, "52172249": 6, "00316436": 6, "46418056": 6, "4505608374882162": 6, "7480579265182639": 6, "observar": 6, "describen": 6, "separador": 6, "eval\u00faan": 6, "hallar": 6, "requiri\u00f3": 6, "continuaci\u00f3n": [6, 7], "presenta": 6, "output": 6, "load": 6, "fisheriri": 6, "numero": 6, "categoria": 6, "seleccionar": 6, "mea": 6, "pij": 6, "y_iy_jx_ix_j": 6, "aeq": 6, "beq": 6, "lb": 6, "optimopt": 6, "algorithm": 6, "point": 6, "convex": 6, "alpha_optim": 6, "fprintf": 6, "15f": 6, "indices_alpha_positivo": 6, "find": 6, "alpha_optimo": 6, "disp": 6, "x_filas_alpha_positivo": 6, "save": 6, "soluciones_2": 6, "mat": 6, "6713": 6, "0767": 6, "7481": 6, "3000": 6, "7000": 6, "5000": 6, "0000": 6, "748058": 6, "hallaron": 6, "lado": [6, 7], "aproximadament": 6, "demustra": 6, "nota": 6, "debido": 6, "hallado": 6, "recurri\u00f3": 6, "guardar": [6, 7], "archivo": 6, "cargarlo": 6, "cargu": 6, "obtenci\u00f3n": 6, "mat_data": 6, "loadmat": 6, "soluciones_1": 6, "67133404": 6, "07672389": 6, "74805793": 6, "condiciones_kkt": 6, "ab": [6, 7], "break": [6, 7], "messag": 6, "all": [6, 7], "condit": 6, "ar": 6, "met": 6, "satisfacen": 6, "els": [6, 7], "decision_valu": 6, "error_r": 6, "classif": 6, "rate": 6, "poco": 6, "cumplen": [6, 7], "84830903e": 6, "29943970e": 6, "31403187e": 6, "08": 6, "32640084e": 6, "2808696905290597": 6, "utiliz\u00f3": 6, "fue": 6, "84523413e": 6, "55640145e": 6, "29701221e": 6, "75867148e": 6, "47048292e": 6, "15524681e": 6, "33605497e": 6, "04400073e": 6, "88151955e": 6, "60244264e": 6, "54569655e": 6, "13136113e": 6, "91954392e": 6, "82916283e": 6, "19760510e": 6, "12769090e": 6, "99298353e": 6, "51490628e": 6, "42448767e": 6, "21600899e": 6, "55670832e": 6, "93164916e": 6, "47771862e": 6, "12967414e": 6, "12866852e": 6, "11374233e": 6, "00868536e": 6, "97050735e": 6, "89424787e": 6, "06195912e": 6, "95879011e": 6, "43613576e": 6, "88186946e": 6, "99051277e": 6, "12405226e": 6, "31035557e": 6, "62586372e": 6, "05527396e": 6, "15643606e": 6, "55377934e": 6, "01396233e": 6, "01942409e": 6, "41812256e": 6, "97791574e": 6, "00235046e": 6, "93858948e": 6, "51680712e": 6, "28317275e": 6, "73615249e": 6, "79904228e": 6, "21143746e": 6, "66606618e": 6, "42172935e": 6, "88670874e": 6, "68327421e": 6, "66178116e": 6, "52162795e": 6, "22130316e": 6, "02738628e": 6, "07258541e": 6, "74494088e": 6, "52755485e": 6, "48862205e": 6, "36428679e": 6, "04737470e": 6, "67948426e": 6, "48135610e": 6, "62632918e": 6, "30908160e": 6, "91566963e": 6, "01069373e": 6, "49747324e": 6, "50917519e": 6, "69406208e": 6, "19956150e": 6, "14074029e": 6, "14317361e": 6, "28958525e": 6, "05": 6, "81090631e": 6, "19010401e": 6, "77376371e": 6, "57632905e": 6, "28433901e": 6, "54608154e": 6, "76104986e": 6, "16891862e": 6, "03293944e": 6, "27916893e": 6, "13845644e": 6, "44197386e": 6, "52207427e": 6, "04511863e": 6, "66606612e": 6, "73346863e": 6, "56081928e": 6, "04048445e": 6, "25276498e": 6, "06049504e": 6, "09412740e": 6, "08467625e": 6, "xi_1": 6, "s_optim": 6, "extend": 6, "20": 6, "96288568e": 6, "02927454e": 6, "30370008e": 6, "22609313e": 6, "1763478560942735": 6, "27723814e": 6, "74860172e": 6, "74071960e": 6, "41422856e": 6, "9268748683851658": 6, "21463446e": 6, "82468577e": 6, "70609704e": 6, "90829115e": 6, "8727395274830383": 6, "44418972e": 6, "71241035e": 6, "72710420e": 6, "32399532e": 6, "8643424376765765": 6, "0001": 6, "10942834e": 6, "01808364e": 6, "77701507e": 6, "07801140e": 6, "8708398512158126": 6, "68143654e": 6, "31882501e": 6, "37314454e": 6, "53262731e": 6, "8087598315635427": 6, "07627256e": 6, "76714125e": 6, "99397203e": 6, "84235622e": 6, "8464031178804934": 6, "83029786e": 6, "48966511e": 6, "89735016e": 6, "99206403e": 6, "4185972853716757": 6, "14002130e": 6, "93333933e": 6, "22124749e": 6, "98660554e": 6, "148547492613536": 6, "73805656e": 6, "05941858e": 6, "79902205e": 6, "94794077e": 6, "6972026353290968": 6, "70426004e": 6, "10686392e": 6, "33913672e": 6, "85807827e": 6, "578652259742932": 6, "32081144e": 6, "57626180e": 6, "03063189e": 6, "33904723e": 6, "4729305788316145": 6, "phi": 6, "acuerdo": [6, 7], "observado": 6, "concluir": 6, "observaron": 6, "era": 6, "observ\u00f3": 6, "eran": 6, "indicaba": 6, "separabilidad": 6, "m\u00e1rgene": 6, "sugier": [6, 7], "nulo": 6, "variar": [6, 7], "cambi\u00f3": 6, "puesto": 6, "usaba": 6, "var\u00edaban": 6, "introducir": 6, "mejorar": 6, "implement": 7, "\u00faselo": 7, "tome": 7, "cualquiera": 7, "cu\u00e1nto": 7, "tom\u00f3": 7, "corrida": 7, "realizada": 7, "situaci\u00f3n": 7, "capaz": 7, "asignar": 7, "manera": 7, "precisa": 7, "produzcan": 7, "categor\u00eda": 7, "clasifican": 7, "encuentran": 7, "frontera": 7, "fuera": 7, "correcto": 7, "y_nf": 7, "x_n": 7, "holgura": 7, "dentro": 7, "anterior": 7, "s\u00ed": 7, "comenten": 7, "logr": 7, "maximizando": 7, "mismo": 7, "minimizando": 7, "p\u00e9rdida": 7, "expresa": 7, "n_": 7, "lambda_jy_iy_j": 7, "langl": 7, "x_m": 7, "rangl": 7, "lambda_n": 7, "ldot": 7, "lambda_ny_n": 7, "ejemplo": 7, "proporcionar\u00e1": 7, "descripci\u00f3n": 7, "c\u00f3mo": 7, "aplicarlo": 7, "inicializaci\u00f3n": 7, "empieza": 7, "inic": 7, "iterativa": 7, "seleccionan": 7, "resulev": 7, "ella": 7, "actualizaci\u00f3n": 7, "actualizan": 7, "repita": 7, "cumplan": 7, "condicion": 7, "actualic": 7, "aprend": 7, "definir": 7, "destacar": 7, "subconjunto": 7, "esencial": 7, "determinar": 7, "considerando": 7, "almacena": 7, "atributo": 7, "dual_coef_": 7, "f\u00f3rmula": 7, "proporcionada": 7, "k_": 7, "x_1": 7, "x_2": 7, "euclidiana": 7, "act\u00faa": 7, "factor": 7, "influy": 7, "noci\u00f3n": 7, "resumen": 7, "defin": 7, "vecindad": 7, "pairwis": 7, "rbf_kernel": 7, "tabul": 7, "cargar": 7, "considerar": 7, "le": 7, "dividir": 7, "tomar": 7, "regi\u00f3n": 7, "point_in_feasible_region": 7, "definici\u00f3n": 7, "ndim": 7, "dist_sq": 7, "keepdim": 7, "dual_svm": 7, "gram": 7, "update_active_set": 7, "x_k": 7, "w_k": 7, "\u00edndice": 7, "positivo": 7, "positive_indic": 7, "elegir": 7, "argmax": 7, "remov": 7, "activo": 7, "kkt_condit": 7, "lambda_": 7, "alpha_tol": 7, "ani": 7, "stationar": 7, "primal_feas": 7, "dual_feas": 7, "complementar": 7, "estacionariedad": 7, "w_prime": 7, "newaxi": 7, "logical_and": 7, "complementariedad": 7, "stationarity_condit": 7, "primal_feasibility_condit": 7, "dual_feasibility_condit": 7, "complementarity_condit": 7, "active_set_solv": 7, "subproblema": 7, "sol": 7, "split": 7, "corregir": 7, "kkt_conditions_result": 7, "list": 7, "convergi\u00f3": 7, "movers": 7, "direcci\u00f3n": 7, "salir": 7, "valid_indic": 7, "regresar": 7, "actualizar": 7, "alpha_k": 7, "x_k1": 7, "bloqueo": 7, "blocking_constraint": 7, "w_k1": 7, "fit_svm": 7, "max_iter": 7, "ensur": 7, "correct": 7, "dimens": 7, "inicial": 7, "fijo": 7, "x_k_prev": 7, "inicializar": 7, "iterar": 7, "alcanzar": 7, "tolerancia": 7, "while": 7, "delta_x_k": 7, "end_tim": 7, "bia": 7, "support_label": 7, "kernel_matrix": 7, "runtim": 7, "entrenar": 7, "evaluar": 7, "llamada": 7, "ajustar": 7, "necesario": 7, "result": 7, "imprimir": 7, "valueerror": 7, "45": 7, "43": 7, "44": 7, "47": 7, "49": 7, "listcomp": 7, "file": 7, "__array_function__": 7, "intern": 7, "180": 7, "arg": 7, "kwarg": 7, "80": 7, "dim": 7, "plot_svm": 7, "pair": 7, "draw": 7, "200": 7, "facecolor": 7, "creat": 7, "decis": 7, "boundari": 7, "level": 7, "usag": 7, "hecho": 7, "haya": 7, "ejecucion": 7, "convergido": 7, "fundament": 7, "asegurar": 7, "encontrada": 7, "logr\u00f3": 7, "9854599380143764": 7, "component": 7, "cr\u00edtico": 7, "ecuaci\u00f3n": 7, "suficient": 7, "beneficioso": 7, "eficiencia": 7, "alrededor": 7, "18": 7, "considerars": 7, "acept": 7, "dependiendo": 7, "requisito": 7, "aplicaci\u00f3n": 7, "complejidad": 7, "273": 7, "razon": 7, "podr\u00eda": 7, "moderadament": 7, "exitosa": 7, "justifica": 7, "logrado": 7, "eficazment": 7, "sugieren": 7, "s\u00f3lido": 7, "moderado": 7, "plantea": 7, "preocupacion": 7, "significativa": 7, "respaldan": 7, "efectividad": 7, "calidad": 7, "prometedora": 7, "pr\u00e1ctica": 7}, "objects": {}, "objtypes": {}, "objnames": {}, "titleterms": {"algoritmo": [0, 7], "del": [0, 5, 7], "m\u00e9todo": [0, 7], "de": [0, 4, 5, 6, 7], "punto": [0, 5], "interior": 0, "paso": [0, 7], "1": [0, 5], "inicializaci\u00f3n": 0, "2": [0, 5], "soluci\u00f3n": 0, "subproblema": 0, "3": [0, 5], "actualizaci\u00f3n": 0, "par\u00e1metro": 0, "barrera": 0, "4": 0, "condicion": [0, 5, 6], "terminaci\u00f3n": 0, "5": 0, "extracci\u00f3n": 0, "la": [0, 4, 5], "conclusion": [1, 4, 6, 7], "referencia": 1, "inform": 2, "proyecto": [2, 6], "final": [2, 6], "optimizacion": 2, "matematica": 2, "introducci\u00f3n": [3, 6], "objetivo": [4, 7], "librer\u00eda": [4, 6], "utilizada": 4, "clasificaci\u00f3n": [4, 6], "binaria": 4, "p\u00falsare": 4, "dato": [4, 6], "pulsar": 4, "variabl": [4, 6], "explicativa": 4, "respuesta": 4, "n\u00famero": [4, 7], "sv": 4, "para": 4, "tener": 4, "en": [4, 5], "cuenta": 4, "curva": 4, "aprendizaj": 4, "resultado": 4, "y": [4, 5, 6], "presencia": 4, "ausencia": 4, "reptil": 4, "cerrej\u00f3n": 4, "svc": 4, "caso": [5, 6, 7], "separ": [5, 6, 7], "frontera": 5, "o": 5, "fuera": 5, "margen": 5, "el": 5, "lado": 5, "correcto": 5, "clasificador": 5, "pero": 5, "dentro": 5, "que": 5, "se": 5, "encuentran": 5, "lugar": 5, "equivocado": 5, "graficament": 5, "lagrangiano": 5, "aplicaci\u00f3n": 5, "svm": [5, 6, 7], "un": 5, "problema": [5, 6, 7], "optimizaci\u00f3n": [5, 6], "ejemplo": 5, "estacionariedad": 5, "al": 5, "dual": [5, 6, 7], "complementariedad": 5, "holgura": [5, 6], "primal": [5, 6], "formulaci\u00f3n": 5, "con": 5, "funci\u00f3n": 5, "transformadora": 5, "phi": 5, "implementaci\u00f3n": [5, 7], "modelo": 5, "preprocesamiento": 5, "implementacion": 5, "conclusi\u00f3n": 5, "conjunto": 6, "utilizado": 6, "desarrollo": 6, "setosa": 6, "versicolor": 6, "probar": 6, "optimalidad": 6, "kkt": 6, "error": 6, "No": 6, "virg\u00ednica": 6, "lo": 6, "experimento": 6, "anterior": 6, "gener": 7, "gr\u00e1ficament": 7, "restriccion": 7, "activa": 7, "general": 7, "kernel": 7, "trick": 7, "libreria": 7, "convergencia": 7, "desempe\u00f1o": 7, "vector": 7, "soport": 7, "tiempo": 7, "ejecuci\u00f3n": 7, "iteracion": 7}, "envversion": {"sphinx.domains.c": 2, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 6, "sphinx.domains.index": 1, "sphinx.domains.javascript": 2, "sphinx.domains.math": 2, "sphinx.domains.python": 3, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.intersphinx": 1, "sphinxcontrib.bibtex": 9, "sphinx": 56}})