const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			agenda: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
				fetch("https://playground.4geeks.com/contact/agendas/agenda_marina")
				.then(response => response.json())
				.then(data => setStore({ agenda: data.contacts }))
			},


			// DELETE AQUI 
			deleteContact: (id) => {
				fetch(`https://playground.4geeks.com/contact/agendas/agenda_marina/contacts/${id}`,  {
					method: "DELETE",
				})
				.then(response => response.json())
				.then(data => console.log(data))
			},

			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
