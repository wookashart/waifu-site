import React, { useEffect, useState } from 'react';
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  CircularProgress,
  Link,
  Container,
  Divider,
  Paper,
  Typography,
  Avatar,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import { fade, makeStyles } from "@material-ui/core/styles";
import Toolbar from "./Module/BackToTop";

import LazyCardMedia from "./Module/LazyCardMedia.js";
import testProf from "./TestData/testProf.js";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "auto",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "50% 35%",
    backgroundSize: "cover",
    height: "330px",
  },
  shadow: {
    height: "100%",
    background: "linear-gradient(180deg,rgba(32, 35, 42,0) 40%,rgba(32, 35, 42,.6))",
  },
  mainPage: {
    width: "95%",
    minHeight: "200px",
    backgroundColor: "#30333a",
    boxShadow: "0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)",
    borderRadius: "8px",
    marginTop: -30,
    marginRight: "auto",
    marginLeft: "auto",
    marginBottom: "100px",
  },
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(12, 1fr)",
    gridGap: theme.spacing(3)
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: "#fff",
    backgroundColor: "#30333a",
    whiteSpace: "nowrap",
    marginBottom: theme.spacing(1)
  },
  divider: {
    margin: theme.spacing(2, 0),
    color: "#fff",
  },

  profile_container: {
    margin: 0,
    padding: 0,
  },
  profile_item: {
    position: "relative",
    minHeight: 70,

    [theme.breakpoints.between('md', 'md')]: {
      bottom: 80,
      textAlign: "center",
    },

  },
  profile_item_avatar: {
    position: "absolute",
    width: 150,
    height: 150,
    right: 0,
    bottom: 0,
    padding: 4,
    border: "2px solid #20232a",
    background: "linear-gradient(to bottom, #20232a, #30333a)",
    // background: "linear-gradient(to bottom right, #20232a, #30333a)",
    // border: "2px solid #20232a",

    "& .MuiAvatar-img": {
      borderRadius: "50%",
    },

    [theme.breakpoints.between('md', 'md')]: {
      position: "relative",
      marginRight: "auto",
      marginLeft: "auto",
    },

  },
  profile_item_name: {
    color: "#f50057",
    marginTop: 5,
    marginLeft: 10,

    [theme.breakpoints.between('md', 'md')]: {
      marginLeft: 0,
    },
  },
  profile_item_rank: {
    color: "#ab003c",
    marginLeft: 10,

    [theme.breakpoints.between('md', 'md')]: {
      marginLeft: 0,
    },
  },

  exchangeConditions_container: {
    margin: 15,
    textAlign: "center",
  },
  exchangeConditions_title: {
    color: "#fff",
  },
  exchangeConditions_content: {
    color: "#c1c1c1",
    fontSize: 18,
  },
  waifu: {
    // boxShadow: "0px 0px 25px 0px rgba(0,0,0,0.20)",
    borderRadius: "20px",
    marginRight: "auto",
    marginLeft: "auto",
    padding: 10,
    width: 350,
  },
  waifu_border: {
    padding: 30,
  },
  waifu_name: {
    textAlign: "center",
    textDecoration: "none",
  },
  waifu_name_link: {
    color: "#f50057",
  },
  rarity_container: {
    // boxShadow: "0px 0px 25px 0px rgba(0,0,0,0.05)",
    borderRadius: "4px",
    display: "grid",
    gridAutoFlow: "column",
    justifyContent: "space-around",
    padding: "10px",
  },
  rarity_item: {
    color: "#000",
    padding: "8px 19px",
    textAlign: "center",
    fontWeight: "bold",
    borderRadius: 4,
    marginBottom: 8,
  },
  rarity_item_content: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
  },
  rarity_total_max: {
    display: "grid",
    gridAutoFlow: "column",
    width: "94%",
    fontSize: 28,
    // padding: "0px 20px",
    textAlign: "center",
    marginLeft: "auto",
    marginRight: "auto",
    fontWeight: "bold",
    // borderRadius: 4,
    marginBottom: 8,
    color: "#c1c1c1",
  },
  rarity_total: {
    borderTopLeftRadius: 4,
    // border: "1px solid #000",
    // borderRight: "0px solid #000",
    // borderBottom: "0px solid #000",
    backgroundColor: "#34363b",
  },
  rarity_max: {
    borderTopRightRadius: 4,
    // border: "1px solid #000",
    // borderLeft: "0px solid #000",
    // borderBottom: "0px solid #000",
    backgroundColor: "#2f3034",
  },
  rarity_bar_container: {
    marginLeft: "auto",
    marginRight: "auto",
    // display: "grid",
    // gridAutoFlow: "column",
    // border: "1px solid #000",
    // borderTop: "0px solid #000",
    borderRadius: 4,
    width: "94%",
    marginTop: -10,
  },
  rarity_bar: {
    display: "inline-block",
    height: 10,
  },
  SSS_count: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
    background: "-webkit-linear-gradient(90deg, rgba(158,58,180,1) 0%, rgba(29,253,179,1) 50%, rgba(252,238,69,1) 100%)",
    "-webkit-background-clip": "text",
    "-webkit-text-fill-color": "transparent",
  },
  gallery: {
    justifyContent: "center",
  },
  gallery_card: {
    boxShadow: "0px 0px 25px 0px rgba(0,0,0,0.15)",
    padding: 8,
    margin: 8,
    width: 180,
  },
  expeditions_title: {
    paddingTop: 15,
    paddingLeft: 15,
    color: "#c1c1c1",
  },
  expeditions_table_container: {
    padding: 15,
    // hidden table scroll
    overflow: "hidden",
  },
  expeditions_table: {
      border: "1px solid #424242",
  },
  expeditions_table_head: {
    backgroundColor: "#232427",
  },
  expeditions_table_th: {
    borderBottom: "2px solid #ab003ce8",
    color: "#f50057",
  },
  expeditions_table_td1: {
    color: "#c1c1c1",
    backgroundColor: "#323438",
    borderBottom: "1px solid #1d1f21",

    "& span": {
      color: "#f50057",
    }
  },
  expeditions_table_td2: {
    color: "#c1c1c1",
    backgroundColor: "#2b2d31",
    borderBottom: "1px solid #1d1f21",

    "& span": {
      color: "#f50057",
    }
  },
  CircularProgress: {
    marginTop: 20,
    marginLeft: "auto",
    marginRight: "auto",
    color: "#ab003c",
  },
  wallet_container: {
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 10,
    display: "grid",
    gridAutoFlow: "column",
    fontSize: 18,
  },
  wallet_item: {
    color: "#c1c1c1",
    textAlign: "center",

    "& span": {
      color: "#f50057",
    }
  },
  error404: {
    marginLeft: "auto",
    marginRight: "auto",
    textAlign: "center",
    fontSize: 32,
    color: "#c1c1c1",

    "& span": {
      fontSize: 40,
      color: "#ab003c",
    }
  },
}));

const Profile = (props) => {

    const { match, history } = props;
    const { params } = match;
    const { userID } = params;

    const classes = useStyles();

    const [profilData, setProfilData] = useState();
    const [status, setStatus] = useState();

    const [nick, setNick] = useState();
console.log(nick);

    useEffect(() => {
      const lastVisited =JSON.parse(localStorage.getItem(`lastVisited`))

      if (lastVisited!==null) {
        lastVisited.forEach(element => {
          if(element!==null) {
            if (element.id==userID) {
              console.log(element);
              setNick(element.name)
            }
          }
        });
      }
    }, []);

    const calculateBarWidth = (max, current) => {
      return `${(100/max)*current}%`;
    }

    function timeDiffCalc(dateFuture, dateNow, maxTime) {
      let diffInMilliSeconds = Math.abs(dateFuture - dateNow) / 1000;
      const min = diffInMilliSeconds/60

      // calculate days
      const days = Math.floor(diffInMilliSeconds / 86400);
      diffInMilliSeconds -= days * 86400;

      // calculate hours
      const hours = Math.floor(diffInMilliSeconds / 3600) % 24;
      diffInMilliSeconds -= hours * 3600;

      // calculate minutes
      const minutes = Math.floor(diffInMilliSeconds / 60) % 60;
      diffInMilliSeconds -= minutes * 60;

      let difference = '';
      if (days > 0) {
        difference += (days === 1) ? `${days}d ` : `${days}d `;
      }

      difference += (hours === 0 || hours === 1) ? `${hours}h ` : `${hours}h `;

      difference += (minutes === 0 || hours === 1) ? `${minutes}m` : `${minutes}m`;

      if (min>maxTime) {
        return (<span>{difference}</span>);
      } else {
        return difference;
      }

    }

    useEffect(()=> {
      setProfilData();
      setStatus();
      axios.get(`https://api.sanakan.pl/api/waifu/user/${userID}/profile`).then((res)=> {
          const newProfilData = res.data;
          setProfilData(newProfilData)
      }).catch((error)=>{
        setStatus(404)
      })
    }, [userID])

    const backgroundImg = (profil) => {
      return (profil===undefined||profil.backgroundImageUrl===null) ?  {backgroundImage: `url(${process.env.PUBLIC_URL}/Pictures/banner.png)`,} :
      {backgroundImage: `url(${profil.backgroundImageUrl})`,}
    }

    return (
      <>
        <Paper className={classes.root} style={backgroundImg(profilData)}>
            <Toolbar props={props} pageValue={0} />
          <div className={classes.shadow} ></div>
        </Paper>

          <Grid container className={classes.mainPage}>
            {profilData ? (
              <>
            <Grid item md={4} xs={12} className={classes.profile} container>
                <Grid item xs={12}>
                  <Grid container justify="center" alignItems="center" className={classes.profile_container}>
                    <Grid item xl={4} lg={5} md={12} sm={4} xs={5} className={classes.profile_item}>
                      {/* <Avatar src={`${process.env.PUBLIC_URL}/Pictures/avatar.png`} alt="avatar.jpg" className={classes.profile_item_avatar} /> */}
                      <Avatar src={`http://cdn.shinden.eu/cdn1/avatars/225x350/${userID}.jpg`} alt="avatar.jpg" className={classes.profile_item_avatar} />
                    </Grid>
                    <Grid item xl={8} lg={7} md={12} sm={8} xs={7} className={classes.profile_item}>
                      <Typography variant="h5" display="block" className={classes.profile_item_name} noWrap>{nick===undefined ? "????" : nick}</Typography>
                      <Typography variant="h7" className={classes.profile_item_rank} noWrap>{profilData.userTitle ? profilData.userTitle : "???"}</Typography>
                    </Grid>
                    <Grid item xs={12} className={classes.exchangeConditions_container}>
                    {/* <Typography variant="h5" className={classes.exchangeConditions_title}>Zasady wymiany:</Typography>*/}
                      <Typography variant="p" className={classes.exchangeConditions_content}>{profilData.exchangeConditions ? profilData.exchangeConditions : "Nie ustawiono warunktów wymiany."}</Typography>
                    </Grid>
                  </Grid>
                </Grid>

                {/* // TODO: Add divider */}
            </Grid>

            <Grid item md={8} xs={12} container>

              <Grid item lg={6} md={12} xs={12} container>

                <Grid item xs={12}>
                  <Grid item xs={12} className={classes.waifu_border}>
                    {profilData.waifu ? (
                      <>
                        <div className={classes.waifu_name}><a href={profilData.waifu.characterUrl} className={classes.waifu_name_link} target={"_blank"}>{profilData.waifu.name}</a></div>
                        <CardMedia component='img' image={profilData.waifu.profileImageUrl} alt={profilData.waifu.id} className={classes.waifu}></CardMedia>
                      </>
                    ) : ""}
                  </Grid>
                </Grid>
                <Grid item xs={12} container>
                  <Grid item xs={12} className={classes.rarity_bar_container}>
                    <div className={classes.rarity_total_max}>
                        <div className={classes.rarity_total}>{profilData.cardsCount.total}</div>
                        <div className={classes.rarity_max}>{profilData.cardsCount.max}</div>
                    </div>
                    <div className={classes.rarity_bar_container}>
                      <div className={classes.rarity_bar} style={{borderBottomLeftRadius: 4, minWidth: calculateBarWidth(profilData.cardsCount.total, profilData.cardsCount.SSS), background: "linear-gradient(90deg, rgba(158,58,180,1) 0%, rgba(29,253,179,1) 50%, rgba(252,238,69,1) 100%)"}}></div>
                      <div className={classes.rarity_bar} style={{minWidth: calculateBarWidth(profilData.cardsCount.total, profilData.cardsCount.SS), backgroundColor: "#ff658e"}}></div>
                      <div className={classes.rarity_bar} style={{minWidth: calculateBarWidth(profilData.cardsCount.total, profilData.cardsCount.S), backgroundColor: "#ffe149"}}></div>
                      <div className={classes.rarity_bar} style={{minWidth: calculateBarWidth(profilData.cardsCount.total, profilData.cardsCount.A), backgroundColor: "#f49244"}}></div>
                      <div className={classes.rarity_bar} style={{minWidth: calculateBarWidth(profilData.cardsCount.total, profilData.cardsCount.B), backgroundColor: "#a556d8"}}></div>
                      <div className={classes.rarity_bar} style={{minWidth: calculateBarWidth(profilData.cardsCount.total, profilData.cardsCount.C), backgroundColor: "#0069ab"}}></div>
                      <div className={classes.rarity_bar} style={{minWidth: calculateBarWidth(profilData.cardsCount.total, profilData.cardsCount.D), backgroundColor: "#3e7315"}}></div>
                      <div className={classes.rarity_bar} style={{borderBottomRightRadius: 4, minWidth: calculateBarWidth(profilData.cardsCount.total, profilData.cardsCount.E), backgroundColor: "#848484"}}></div>
                    </div>
                  </Grid>
                  <Grid item xs={12} className={classes.rarity_container}>
                    <div>
                      <div className={classes.rarity_item} style={{background: "linear-gradient(90deg, rgba(158,58,180,1) 0%, rgba(29,253,179,1) 50%, rgba(252,238,69,1) 100%)"}}>SSS</div>
                      <div className={classes.rarity_item_content, classes.SSS_count}>{profilData.cardsCount.SSS}</div>
                    </div>
                    <div>
                      <div className={classes.rarity_item} style={{backgroundColor: "#ff658e"}}>SS</div>
                      <div className={classes.rarity_item_content} style={{color: "#ff658e"}}>{profilData.cardsCount.SS}</div>
                    </div>
                    <div>
                      <div className={classes.rarity_item} style={{backgroundColor: "#ffe149"}}>S</div>
                      <div className={classes.rarity_item_content} style={{color: "#ffe149"}}>{profilData.cardsCount.S}</div>
                    </div>
                    <div>
                      <div className={classes.rarity_item} style={{backgroundColor: "#f49244"}}>A</div>
                      <div className={classes.rarity_item_content} style={{color: "#f49244"}}>{profilData.cardsCount.A}</div>
                    </div>
                    <div>
                      <div className={classes.rarity_item} style={{backgroundColor: "#a556d8"}}>B</div>
                      <div className={classes.rarity_item_content} style={{color: "#a556d8"}}>{profilData.cardsCount.B}</div>
                    </div>
                    <div>
                      <div className={classes.rarity_item} style={{backgroundColor: "#0069ab"}}>C</div>
                      <div className={classes.rarity_item_content} style={{color: "#0069ab"}}>{profilData.cardsCount.C}</div>
                    </div>
                    <div>
                      <div className={classes.rarity_item} style={{backgroundColor: "#3e7315"}}>D</div>
                      <div className={classes.rarity_item_content} style={{color: "#3e7315"}}>{profilData.cardsCount.D}</div>
                    </div>
                    <div>
                      <div className={classes.rarity_item} style={{backgroundColor: "#848484"}}>E</div>
                      <div className={classes.rarity_item_content} style={{color: "#848484"}}>{profilData.cardsCount.E}</div>
                    </div>
                  </Grid>
                </Grid>

              </Grid>

              {/* Expeditions table */}
              <Grid item lg={6} md={12} xs={12}>
              <Typography variant="h5" className={classes.expeditions_title}>Wyprawy: </Typography>
              <TableContainer className={classes.expeditions_table_container}>
                <Table className={classes.expeditions_table} size="small" aria-label="a dense table">
                  <TableHead className={classes.expeditions_table_head}>
                    <TableRow>
                      <TableCell className={classes.expeditions_table_th} align="center">ID</TableCell>
                      <TableCell className={classes.expeditions_table_th} align="center">Nazwa</TableCell>
                      <TableCell className={classes.expeditions_table_th} align="center">Typ</TableCell>
                      <TableCell className={classes.expeditions_table_th} align="center">Czas</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {profilData.expeditions.map((card, index) => (
                      <TableRow key={card.card.id}>
                        <TableCell className={index%2===0 ? classes.expeditions_table_td1 : classes.expeditions_table_td2} align="center">{card.card.id}</TableCell>
                        <TableCell className={index%2===0 ? classes.expeditions_table_td1 : classes.expeditions_table_td2} align="center">{card.card.name}</TableCell>
                        <TableCell className={index%2===0 ? classes.expeditions_table_td1 : classes.expeditions_table_td2} align="center">{card.expedition}</TableCell>
                        <TableCell className={index%2===0 ? classes.expeditions_table_td1 : classes.expeditions_table_td2} align="center">{timeDiffCalc(new Date(card.startTime), new Date(), card.maxTime)}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
              {/* Expeditions table END */}

              {/* Wallet */}
              <Grid item xs={12}>
                <div className={classes.wallet_container}>
                  <div className={classes.wallet_item}>
                    <span>PC</span>: {profilData.wallet.PC}
                  </div>
                  <div className={classes.wallet_item}>
                    <span>CT</span>: {profilData.wallet.CT}
                  </div>
                  <div className={classes.wallet_item}>
                    <span>TC</span>: {profilData.wallet.TC}
                  </div>
                  <div className={classes.wallet_item}>
                    <span>SC</span>: {profilData.wallet.SC}
                  </div>
                </div>
              </Grid>
              {/* Wallet END */}

              </Grid>

            </Grid>


            <Grid item xs={12} container>

              <Grid item xs={12}>
                  <Divider variant="middle" />
                </Grid>
                <Grid item xs={12} container className={classes.gallery}>
                  {profilData.gallery.map((card)=>{
                    return (
                      <Grid item key={card.id}>
                        <div className={classes.gallery_card}>
                          <LazyCardMedia image={card.profileImageUrl} alt={card.id}  {...props} ></LazyCardMedia>
                        </div>
                      </Grid>
                    )
                  })}
                </Grid>
              </Grid>
              </>
            ) : (
              status===404 ? <p className={classes.error404}><span>404</span><br />Nie odnaleziono profilu użytkownika waifu.</p> :
              <CircularProgress className={classes.CircularProgress} size={100}/>
            )}
          </Grid>
    </>
    )
}

export default Profile;