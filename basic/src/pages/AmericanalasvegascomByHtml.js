import { useEffect } from "react";
import styles from "./AmericanalasvegascomByHtml.module.css";
const AmericanalasvegascomByHtml = () => {
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add(styles.animate);
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  return (
    <div className={styles.americanalasvegascomByHtml}>
      <img className={styles.pseudoIcon} alt="" src="/pseudo@2x.png" />
      <div className={styles.mainArticle}>
        <div className={styles.heading1}>Our Menu</div>
        <div className={styles.divfoodMenuNav}>
          <div className={styles.link}>
            <div className={styles.lunch}>Lunch</div>
          </div>
          <div className={styles.link1}>
            <div className={styles.lunch}>Dinner</div>
          </div>
          <div className={styles.link2}>
            <div className={styles.lunch}>Dessert</div>
          </div>
          <div className={styles.link3}>
            <div className={styles.lunch}>Sunday Brunch</div>
          </div>
        </div>
        <div className={styles.divmenu51612}>
          <div className={styles.section}>
            <div className={styles.heading2}>Appetizers</div>
            <div className={styles.divfoodMenuContent}>
              <div className={styles.divmenuItem633179}>
                <div className={styles.heading3}>Market Select Oysters*</div>
                <div className={styles.div}>$24.00</div>
                <div className={styles.cocktailSauce}>
                  Cocktail Sauce | Cucumber-Lime Mignonette
                </div>
              </div>
              <div className={styles.divmenuItem633180}>
                <div className={styles.heading31}>Marinated Seafood Salad</div>
                <div className={styles.div1}>$20.00</div>
                <div className={styles.shrimpOctopus}>
                  Shrimp| Octopus | Calamari
                </div>
              </div>
              <div className={styles.divmenuItem633182}>
                <div className={styles.heading32}>
                  Lemon Thyme “Caesar” Salad
                </div>
                <div className={styles.div2}>$12.00</div>
                <div className={styles.divfoodItemDescription}>
                  <div className={styles.briocheCroutonContainer}>
                    <span className={styles.briocheCroutonContainer1}>
                      <p className={styles.briocheCrouton}>
                        Brioche Crouton | Parmesan Add Chicken $7 | Add Shrimp
                        $9
                      </p>
                      <p className={styles.briocheCrouton}>| Add Salmon*$12</p>
                    </span>
                  </div>
                </div>
              </div>
              <div className={styles.divmenuItem633185}>
                <div className={styles.heading33}>Chopped Salad</div>
                <div className={styles.div3}>$16.00</div>
                <div className={styles.divfoodItemDescription}>
                  <div className={styles.eggAvocadoContainer}>
                    <span className={styles.briocheCroutonContainer1}>
                      <p className={styles.briocheCrouton}>
                        Egg | Avocado | Bacon | Ranch Add Chicken $7|Add Shrimp
                      </p>
                      <p className={styles.briocheCrouton}>
                        $9 | Add Salmon*$12
                      </p>
                    </span>
                  </div>
                </div>
              </div>
              <div className={styles.divmenuItem633186}>
                <div className={styles.heading34}>Sesame Crusted Tuna*</div>
                <div className={styles.div1}>$20.00</div>
                <div className={styles.shisoMasago}>Shiso | Masago | Soy</div>
              </div>
              <div className={styles.divmenuItem633187}>
                <div className={styles.heading35}>Salmon Tartare</div>
                <div className={styles.div5}>$18.00</div>
                <div className={styles.avocadoCrema}>
                  Avocado Crema ~ Ponzu ~ Rice Crisps
                </div>
              </div>
              <div className={styles.divmenuItem633189}>
                <div className={styles.heading36}>
                  Niki’s Spicy Crispy Shrimp
                </div>
                <div className={styles.div1}>$20.00</div>
                <div className={styles.cabbageSlaw}>
                  Cabbage Slaw | Dragon Fruit | Yuzu
                </div>
              </div>
              <div className={styles.divmenuItem633190}>
                <div className={styles.heading31}>Asparagus and Pea Soup</div>
                <div className={styles.div7}>$14.00</div>
                <div className={styles.blueCrab}>Blue Crab | Creme Fraiche</div>
              </div>
              <div className={styles.divmenuItem633193}>
                <div className={styles.heading38}>
                  Charcuterie and Cheese Board
                </div>
                <div className={styles.div2}>$21.00</div>
                <div className={styles.cheeses2}>
                  2 Cheeses | 2 Meats | Fun Accompaniments
                </div>
              </div>
              <div className={styles.divmenuItem1881488}>
                <div className={styles.heading39}>Italian Wedge Salad</div>
                <div className={styles.div2}>$12.00</div>
                <div className={styles.divfoodItemDescription}>
                  <div className={styles.salamiBlueContainer}>
                    <span className={styles.briocheCroutonContainer1}>
                      <p className={styles.briocheCrouton}>
                        Salami | Blue Cheese | Cherry Peppers | Creamy Oregano
                      </p>
                      <p className={styles.briocheCrouton}>Vinaigrette</p>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.section1}>
            <div className={styles.heading21}>Entrees</div>
            <div className={styles.gratuityWillBe}>
              20% Gratuity will be added to parties 6 or more
            </div>
            <div className={styles.divfoodMenuContent1}>
              <div className={styles.divmenuItem633179}>
                <div className={styles.heading310}>
                  Spicy Gluten-Free Fusilli Pasta
                </div>
                <div className={styles.div10}>$15.00</div>
                <div className={styles.basilGuanciale}>
                  Basil | Guanciale | San Marzano Tomatoes
                </div>
              </div>
              <div className={styles.divmenuItem633197}>
                <div className={styles.heading311}>
                  Moms Garlicky Alfredo Fettucine
                </div>
                <div className={styles.div11}>$17.00</div>
                <div className={styles.divfoodItemDescription}>
                  <div className={styles.locatelliParmesanContainer}>
                    <span className={styles.briocheCroutonContainer1}>
                      <p className={styles.briocheCrouton}>
                        Locatelli| Parmesan | Farm Egg. Add Chicken $7 | Add
                      </p>
                      <p className={styles.briocheCrouton}>
                        Shrimp $9| Add Salmon*$12
                      </p>
                    </span>
                  </div>
                </div>
              </div>
              <div className={styles.divmenuItem633198}>
                <div className={styles.heading312}>Americana Prime Burger*</div>
                <div className={styles.div5}>$18.00</div>
                <div className={styles.divfoodItemDescription}>
                  <div className={styles.caramelizedOnionsContainer}>
                    <span className={styles.briocheCroutonContainer1}>
                      <p className={styles.briocheCrouton}>
                        Caramelized Onions | Aged Cheddar | Jacqueline Sauce Sea
                      </p>
                      <p className={styles.briocheCrouton}>
                        Salt Fries or Truffled ($3)
                      </p>
                    </span>
                  </div>
                </div>
              </div>
              <div className={styles.divmenuItem633199}>
                <div className={styles.heading313}>Shrimp Po' Boy Sandwich</div>
                <div className={styles.div}>$24.00</div>
                <div className={styles.divfoodItemDescription}>
                  <div className={styles.coleslawRemouladeContainer}>
                    <span className={styles.briocheCroutonContainer1}>
                      <p className={styles.briocheCrouton}>
                        Coleslaw | Remoulade. Sea Salt Fries or Truffled ($3)
                        ADD
                      </p>
                      <p className={styles.briocheCrouton}>Chicken $7</p>
                    </span>
                  </div>
                </div>
              </div>
              <div className={styles.divmenuItem633200}>
                <div className={styles.heading314}>Pan Seared King Salmon*</div>
                <div className={styles.div}>$24.00</div>
                <div className={styles.englishPeaRisotto}>
                  English Pea Risotto | Meyer Lemon
                </div>
              </div>
              <div className={styles.divmenuItem633201}>
                <div className={styles.heading315}>
                  Chicago Style Shaved Beef Sandwich
                </div>
                <div className={styles.div15}>$22.00</div>
                <div className={styles.provoloneGiardiniera}>
                  Provolone| Giardiniera | Au jus
                </div>
              </div>
              <div className={styles.divmenuItem827734}>
                <div className={styles.heading316}>
                  Grilled Petite Ribeye Steak*
                </div>
                <div className={styles.div16}>$37.00</div>
                <div className={styles.divfoodItemDescription}>
                  <div className={styles.henOfTheContainer}>
                    <span className={styles.briocheCroutonContainer1}>
                      <p className={styles.briocheCrouton}>
                        Hen Of the Woods Mushroom | Red Wine Natural | Potato
                      </p>
                      <p className={styles.briocheCrouton}>Puree</p>
                    </span>
                  </div>
                </div>
              </div>
              <div className={styles.divmenuItem827735}>
                <div className={styles.heading317}>
                  Japanese A5 Wagyu from Kagoshima*
                </div>
                <div className={styles.perOunce}>$30.00/per ounce</div>
                <div className={styles.ounceMinimum}>3-ounce Minimum</div>
              </div>
              <div className={styles.divmenuItem1881491}>
                <div className={styles.heading318}>
                  Grilled Chicken Teriyaki Sandwich
                </div>
                <div className={styles.div7}>$14.00</div>
                <div className={styles.avocadoPineapple}>
                  Avocado | Pineapple Aioli | Hawaiian Bun
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <nav className={styles.navigation}>
        <div className={styles.divcontainer} data-animate-on-scroll>
          <div className={styles.listItem}>
            <img
              className={styles.linkIcon}
              alt=""
              src="/link.svg"
              data-animate-on-scroll
            />
            <img
              className={styles.linkIcon1}
              alt=""
              src="/link1.svg"
              data-animate-on-scroll
            />
          </div>
          <img
            className={styles.linkLogopng}
            alt=""
            src="/link--logopng@2x.png"
            data-animate-on-scroll
          />
          <div className={styles.list} data-animate-on-scroll>
            <div className={styles.itemLink}>MENU</div>
            <div className={styles.itemLink1}>DRINKS</div>
            <div className={styles.itemLink2}>CATERING</div>
            <div className={styles.itemLink3}>EVENTS</div>
            <div className={styles.itemLink4}>PARTIES</div>
            <div className={styles.itemLink5}>RESERVE</div>
            <div className={styles.itemLink6}>
              <div className={styles.jobs}>JOBS</div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default AmericanalasvegascomByHtml;
